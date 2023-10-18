# Represents the products or services offered by small businesses, including details like product name, description, price, availability, and business owner.
from backend.db import db
from datetime import datetime

class Product(db.Model):
   __tablename__ = "products"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = False)
   price = db.Column(db.String(10),unique = False)
   origin = db.Column(db.String(30),unique = False)
   image = db.Column(db.String(255),unique = False)
   users_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   businesses_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   #relationships
   orders = db.relationship('Order',backref='Order')

   def __init__(self,name,price,origin,image,users_id,businesses_id):
      self.name = name
      self.price = price
      self.image = image
      self.origin = origin
      self.users_id = users_id
      self.businesses_id = businesses_id
      