from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Category(Base):
    """
    Matches Figma 'Select Category' screen:
    card image, icon, name, description, "140+ Suppliers" badge, verified checkmark.
    """
    __tablename__ = "categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(255), nullable=True)
    icon = Column(String(50), nullable=True)
    image_url = Column(String(500), nullable=True)
    is_verified_sector = Column(Boolean, default=True)
    sector_id = Column(Integer, ForeignKey("sectors.id"), nullable=True)

    sector = relationship("Sector")
    suppliers = relationship("Supplier", back_populates="category")
