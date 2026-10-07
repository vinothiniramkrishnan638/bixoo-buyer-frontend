from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class SubCategory(Base):
    """Tabs on 'Vehicles Sub-Category' screen: All Fleet / Mini Trucks / Cargo Vans / Open Lorries / Containers."""
    __tablename__ = "subcategories"

    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    name = Column(String(100), nullable=False)
    icon = Column(String(500), nullable=True)   # small thumbnail shown on the tab

    category = relationship("Category")
    products = relationship("Product", back_populates="subcategory")
