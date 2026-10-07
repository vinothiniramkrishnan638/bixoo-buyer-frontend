from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from database import Base


class CategoryRequest(Base):
    """Bottom CTA: "Can't find your category? Submit custom RFQ or request a new sector." """
    __tablename__ = "category_requests"

    id = Column(Integer, primary_key=True, index=True)
    buyer_id = Column(Integer, nullable=False, index=True)
    requested_name = Column(String(200), nullable=False)
    details = Column(String(1000), nullable=True)
    status = Column(String(30), default="pending")   # pending / reviewed / added
    created_at = Column(DateTime(timezone=True), server_default=func.now())
