# Represents product categories or business types to help categorize and organize listings.
from backend.db import db, ma
from datetime import datetime

class Category(db.Model):
   __tablename__ = "categories"

   from backend.products.model import Product

   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = True)
   description = db.Column(db.String(100), unique = True)
   image = db.Column(db.String(255),unique = True)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   businesses_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))

   #relationships
   products = db.relationship('Product', backref='category')

class CategorySchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = Category