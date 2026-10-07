from sqlalchemy import Column, Integer, String
from database import Base


class Sector(Base):
    """The 3 filter tabs at the top of 'Select Category': All / Heavy Industry / Agro & Food."""
    __tablename__ = "sectors"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String(50), unique=True, nullable=False)   # "heavy_industry"
    label = Column(String(100), nullable=False)              # "Heavy Industry"
