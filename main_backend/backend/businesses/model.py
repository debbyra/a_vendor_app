# Represents the small businesses listed on your app and includes details like business name, description, location, contact information, and products/services offered.
from backend.db import db, ma
from datetime import datetime

class Business(db.Model):
   __tablename__ = "businesses"

   from backend.categories.model import Category
   from backend.products.model import Product

   id = db.Column(db.Integer, primary_key = True)
   bus_name = db.Column(db.String(100), unique = True)
   email_addr = db.Column(db.String(100), unique = True)
   phone = db.Column(db.String(15),unique = True)
   logo = db.Column(db.String(100),unique = True)
   description = db.Column(db.String(255),unique = False)
   employees = db.Column(db.String(255),unique = False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   locations_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
   business_category_id = db.Column(db.Integer, db.ForeignKey('business_categories.id'))
   

   #relationships
   products = db.relationship('Product', backref='business')
   categories = db.relationship('Category',backref='business')

class BusinessSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = Business
