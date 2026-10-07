from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from schemas.requirement import RequirementCreate, RequirementOut
from services import requirement_service

router = APIRouter(tags=["Requirements"])


@router.post("/requirements", response_model=RequirementOut)
def create_requirement(payload: RequirementCreate, db: Session = Depends(get_db)):
    """Final submit of the Post Requirement wizard (after Budget & Details step)."""
    return requirement_service.create_requirement(db, payload)


@router.get("/requirements/{requirement_id}", response_model=RequirementOut)
def get_requirement(requirement_id: int, db: Session = Depends(get_db)):
    """Matches the 'Requirement Posted' screen's Requirement Summary card."""
    requirement = requirement_service.get_requirement(db, requirement_id)
    if not requirement:
        raise HTTPException(status_code=404, detail="Requirement not found")
    return requirement
