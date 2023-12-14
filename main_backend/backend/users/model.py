# Represents user accounts and contains attributes like username, email, password, and user roles (e.g., customer, business owner).
from backend.db import db,ma
from dataclasses import dataclass
from datetime import datetime

class User(db.Model):
   __tablename__ = "users"
   from backend.reviews.model import Review
   from backend.orders.model import Order
   from backend.businesses.model import Business
   from backend.notifications.model import Notification
   from backend.products.model import Product
   id:int
   first_name:str
   last_name:str
   email:str
   password:str
   contact:int

   id = db.Column(db.Integer, primary_key = True)
   first_name = db.Column(db.String(255),unique = False)
   last_name = db.Column(db.String(255),unique = False)
   password = db.Column(db.String(255),unique = True)
   email = db.Column(db.String(255),unique = True)
   contact = db.Column(db.Integer,unique = True)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   locations_id = db.Column(db.Integer,unique = False)

   #relationships
   orders = db.relationship('Order', backref= 'user')  
   products = db.relationship('Product',backref= 'user')
   businesses = db.relationship('Business',backref='user') 
   notifications = db.relationship('Notification',backref='user')
   reviews = db.relationship('Review', backref= 'user')
   

   def __init__(self,first_name,last_name,password,contact,email):
      self.first_name = first_name
      self.password = password
      self.email = email
      self.contact = contact
      self.last_name = last_name
      
   def save(self):
      db.session.add(self)
      db.session.commit()

class UserSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = User



      