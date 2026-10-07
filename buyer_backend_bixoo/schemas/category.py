from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class SectorOut(BaseModel):
    key: str
    label: str


class CategoryOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: Optional[str] = None
    icon: Optional[str] = None
    image_url: Optional[str] = None
    is_verified_sector: bool
    supplier_count: int   # computed in the service layer, not a raw DB column


class CategoryRequestCreate(BaseModel):
    buyer_id: int
    requested_name: str
    details: Optional[str] = None


class CategoryRequestOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    buyer_id: int
    requested_name: str
    details: Optional[str] = None
    status: str
    created_at: datetime
