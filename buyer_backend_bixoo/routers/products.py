from typing import Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from services import product_service

router = APIRouter(tags=["Products"])


@router.get("/categories/{category_id}/subcategories")
def get_subcategories(category_id: int, db: Session = Depends(get_db)):
    """Matches the top tab bar on 'Vehicles Sub-Category' screen: All Fleet / Mini Trucks / ..."""
    return product_service.list_subcategories(db, category_id)


@router.get("/categories/{category_id}/products")
def get_products(
    category_id: int,
    subcategory_id: Optional[int] = None,
    db: Session = Depends(get_db),
):
    """Matches the swipeable product reel cards below the tabs."""
    return product_service.list_products(db, category_id, subcategory_id)
