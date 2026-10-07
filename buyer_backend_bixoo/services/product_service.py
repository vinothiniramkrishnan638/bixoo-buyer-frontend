from typing import Optional

from sqlalchemy import func
from sqlalchemy.orm import Session

from models import SubCategory, Product


def list_subcategories(db: Session, category_id: int):
    """Tabs: All Fleet / Mini Trucks / Cargo Vans / Open Lorries / Containers - with live product counts."""
    subs = db.query(SubCategory).filter(SubCategory.category_id == category_id).all()

    total_count = db.query(func.count(Product.id)).filter(Product.category_id == category_id).scalar()
    results = [{"id": 0, "name": "All Fleet", "icon": None, "product_count": total_count}]

    for sub in subs:
        count = db.query(func.count(Product.id)).filter(Product.subcategory_id == sub.id).scalar()
        results.append({"id": sub.id, "name": sub.name, "icon": sub.icon, "product_count": count})
    return results


def list_products(db: Session, category_id: int, subcategory_id: Optional[int] = None):
    """Product reel cards for a category, optionally filtered by subcategory tab."""
    query = db.query(Product).filter(Product.category_id == category_id)
    if subcategory_id:
        query = query.filter(Product.subcategory_id == subcategory_id)
    return query.all()
