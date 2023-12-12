# Represents the products or services offered by small businesses, including details like product name, description, price, availability, and business owner.
from backend.db import db, ma
from datetime import datetime

class Product(db.Model):
   __tablename__ = "products"

   # from backend.business_categories.model import BusinessCategory

   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = False)
   price = db.Column(db.String(10),unique = False)
   quantity = db.Column(db.Integer, nullable=False)
   image_url = db.Column(db.String(255), unique=False)
   video_url = db.Column(db.String(255), unique=False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   businesses_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
   business_category_id = db.Column(db.Integer, db.ForeignKey('business_categories.id'))
   category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, nullable=True)

class ProductSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = Product