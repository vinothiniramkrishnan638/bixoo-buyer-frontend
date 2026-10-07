from typing import Optional

from sqlalchemy import func
from sqlalchemy.orm import Session

from models import Category, Sector, Supplier, CategoryRequest
from schemas.category import CategoryRequestCreate


def list_categories(db: Session, sector: Optional[str] = "all", search: Optional[str] = None):
    """
    Matches 'Select Category' screen: sector tabs + search box.
    Also attaches a live supplier_count (from the Supplier table) to each category.
    """
    query = db.query(Category)

    if sector and sector != "all":
        query = query.join(Sector).filter(Sector.key == sector)

    if search:
        query = query.filter(Category.name.ilike(f"%{search}%"))

    categories = query.all()

    results = []
    for cat in categories:
        supplier_count = (
            db.query(func.count(Supplier.id))
            .filter(Supplier.category_id == cat.id)
            .scalar()
        )
        results.append({
            "id": cat.id,
            "name": cat.name,
            "description": cat.description,
            "icon": cat.icon,
            "image_url": cat.image_url,
            "is_verified_sector": cat.is_verified_sector,
            "supplier_count": supplier_count,
        })
    return results


def list_sectors(db: Session):
    """The 3 filter tabs: All Sectors / Heavy Industry / Agro & Food."""
    tabs = [{"key": "all", "label": "All Sectors"}]
    tabs += [{"key": s.key, "label": s.label} for s in db.query(Sector).all()]
    return tabs


def create_category_request(db: Session, payload: CategoryRequestCreate) -> CategoryRequest:
    """Bottom CTA: 'Can't find your category? Submit custom RFQ or request a new sector.'"""
    request = CategoryRequest(**payload.dict())
    db.add(request)
    db.commit()
    db.refresh(request)
    return request
