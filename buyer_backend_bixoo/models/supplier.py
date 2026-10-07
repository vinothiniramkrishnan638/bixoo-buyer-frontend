from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Supplier(Base):
    """
    A seller registered under a category. The "140+ Suppliers" badge on the
    Select Category screen is the count of rows here per category, not a
    hardcoded number.
    """
    __tablename__ = "suppliers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    is_verified = Column(Boolean, default=True)

    category = relationship("Category", back_populates="suppliers")
