from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.sql import func
from database import Base


class Requirement(Base):
    """
    Post Requirement flow (8-step Figma wizard). Covers:
    - Step 1-4: category, requirement type, product, quantity (already on Category/Product screens)
    - Step 5 (Delivery Location): location, lat/lng, required date, time (optional)
    - Step 6 (Budget & Details): expected budget, details, attachments
    - "Requirement Posted" screen: requirement_code (#REQ-92841), status
    """
    __tablename__ = "requirements"

    id = Column(Integer, primary_key=True, index=True)
    requirement_code = Column(String(20), unique=True, index=True, nullable=True)   # "#REQ-92841"

    buyer_id = Column(Integer, nullable=False, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=True)

    product_name = Column(String(200), nullable=False)    # free text fallback if no catalog product_id
    quantity = Column(Float, nullable=False)
    unit = Column(String(20), default="units")

    # Step 5: Delivery Location
    delivery_location = Column(String(255), nullable=True)
    delivery_lat = Column(Float, nullable=True)
    delivery_lng = Column(Float, nullable=True)
    required_date = Column(DateTime, nullable=True)
    required_time = Column(String(20), nullable=True)       # optional, "Any Time" default

    # Step 6: Budget & Details
    budget = Column(Float, nullable=True)
    details = Column(String(1000), nullable=True)
    attachment_urls = Column(String(1000), nullable=True)   # comma-separated file URLs (JPG/PNG/PDF, <=5MB each)

    status = Column(String(30), default="posted")           # posted / matching / completed / cancelled
    created_at = Column(DateTime(timezone=True), server_default=func.now())
