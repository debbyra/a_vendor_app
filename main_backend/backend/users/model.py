# Represents user accounts and contains attributes like username, email, password, and user roles (e.g., customer, business owner).
from backend.db import db
from dataclasses import dataclass
from datetime import datetime

@dataclass
class User(db.Model):
   __tablename__ = "users"
   id:int
   name:str
   email:str
   password:str
   contact:int
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100),unique = False)
   password = db.Column(db.String(10),unique = True)
   email = db.Column(db.String(30),unique = True)
   contact = db.Column(db.Integer,unique = True)
   locations_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   #relationships
   reviews = db.relationship('Review', backref= 'user')
   orders = db.relationship('Order', backref= 'user')  
   products = db.relationship('Product',backref= 'user')
   businesses = db.relationship('Business',backref='user') 
   notifications = db.relationship('Notification',backref='user')

   def __init__(self,name,password,contact,email,locations_id):
      self.name = name
      self.password = password
      self.email = email
      self.contact = contact
      self.locations_id = locations_id
      




      