import random

from sqlalchemy.orm import Session

from models import Requirement
from schemas.requirement import RequirementCreate


def create_requirement(db: Session, payload: RequirementCreate) -> Requirement:
    """Matches final 'Next Step' submit on the Post Requirement wizard."""
    requirement = Requirement(**payload.dict())
    requirement.requirement_code = f"REQ-{random.randint(10000, 99999)}"   # matches Figma "#REQ-92841"
    db.add(requirement)
    db.commit()
    db.refresh(requirement)
    return requirement


def get_requirement(db: Session, requirement_id: int):
    """Matches the 'Requirement Posted' screen - Requirement Summary card."""
    return db.query(Requirement).filter(Requirement.id == requirement_id).first()
