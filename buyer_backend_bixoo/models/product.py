from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Product(Base):
    """
    A single product 'reel' card on the Vehicles Sub-Category screen:
    image, supplier verified badge, location, units ready, tag, rating,
    name, contract (rental) price, and a bulk-buy price range.
    """
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    category_id = Column(Integer, ForeignKey("categories.id"), nullable=False)
    subcategory_id = Column(Integer, ForeignKey("subcategories.id"), nullable=True)

    name = Column(String(200), nullable=False)             # "Tata Ace Gold Plus (High Deck)"
    tag = Column(String(50), nullable=True)                 # "MINI COMMERCIAL"
    image_url = Column(String(500), nullable=True)

    seller_id = Column(Integer, nullable=True)
    is_verified_supplier = Column(Boolean, default=True)
    location = Column(String(100), nullable=True)           # "Chennai, TN"
    units_ready = Column(Integer, default=0)                 # "32 Units Ready"
    rating = Column(Float, default=0.0)                      # 4.9

    contract_price = Column(Float, nullable=True)            # 3400  -> "₹3.4k/day"
    contract_unit = Column(String(20), default="day")

    bulk_price_min = Column(Float, nullable=True)             # 4.20 (Lakh)
    bulk_price_max = Column(Float, nullable=True)             # 4.65 (Lakh)
    bulk_price_unit = Column(String(20), default="Lakh")

    subcategory = relationship("SubCategory", back_populates="products")
