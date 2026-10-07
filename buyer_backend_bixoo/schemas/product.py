from typing import Optional
from pydantic import BaseModel, ConfigDict


class SubCategoryOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    icon: Optional[str] = None
    product_count: int   # computed in the service layer


class ProductOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    tag: Optional[str] = None
    image_url: Optional[str] = None
    is_verified_supplier: bool
    location: Optional[str] = None
    units_ready: int
    rating: float
    contract_price: Optional[float] = None
    contract_unit: str
    bulk_price_min: Optional[float] = None
    bulk_price_max: Optional[float] = None
    bulk_price_unit: str
