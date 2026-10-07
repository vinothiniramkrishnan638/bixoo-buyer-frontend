from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class RequirementCreate(BaseModel):
    buyer_id: int
    category_id: int
    product_id: Optional[int] = None
    product_name: str
    quantity: float
    unit: str = "units"

    # Step 5: Delivery Location
    delivery_location: Optional[str] = None
    delivery_lat: Optional[float] = None
    delivery_lng: Optional[float] = None
    required_date: Optional[datetime] = None
    required_time: Optional[str] = None

    # Step 6: Budget & Details
    budget: Optional[float] = None
    details: Optional[str] = None
    attachment_urls: Optional[str] = None


class RequirementOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    requirement_code: Optional[str] = None
    buyer_id: int
    category_id: int
    product_name: str
    quantity: float
    unit: str
    delivery_location: Optional[str] = None
    required_date: Optional[datetime] = None
    required_time: Optional[str] = None
    budget: Optional[float] = None
    details: Optional[str] = None
    attachment_urls: Optional[str] = None
    status: str
    created_at: datetime
