from typing import Optional

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from schemas.category import CategoryRequestCreate
from services import category_service

router = APIRouter(tags=["Categories"])


@router.get("/categories")
def get_categories(
    sector: Optional[str] = "all",
    search: Optional[str] = None,
    db: Session = Depends(get_db),
):
    return category_service.list_categories(db, sector=sector, search=search)


@router.get("/sectors")
def get_sectors(db: Session = Depends(get_db)):
    return category_service.list_sectors(db)


@router.post("/categories/request")
def request_new_category(payload: CategoryRequestCreate, db: Session = Depends(get_db)):
    return category_service.create_category_request(db, payload)
