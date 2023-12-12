from backend.db import db, ma
from datetime import datetime

class BusinessCategory(db.Model):
    __tablename__ = "business_categories"

    from backend.businesses.model import Business
    from backend.products.model import Product

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    icon = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    businesses = db.relationship('Business', backref='business_category', lazy=True)
    products = db.relationship('Product', backref='business_category', lazy=True)

    def __repr__(self):
        return f"<BusinessCategory {self.name} >"
    
class BusinessCategorySchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = BusinessCategory