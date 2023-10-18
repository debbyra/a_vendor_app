# Represents the small businesses listed on your app and includes details like business name, description, location, contact information, and products/services offered.
from backend.db import db
from datetime import datetime

class Business(db.Model):
   __tablename__ = "businesses"
   id = db.Column(db.Integer, primary_key = True)
   bus_name = db.Column(db.String(100), unique = True)
   email_addr = db.Column(db.String(100), unique = True)
   phone = db.Column(db.String(15),unique = True)
   logo = db.Column(db.String(100),unique = True)
   description = db.Column(db.String(255),unique = False)
   employees = db.Column(db.String(255),unique = False)
   users_id = db.Column(db.String(200),db.ForeignKey('users.id'),unique = False)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   locations_id = db.Column(db.Integer, db.ForeignKey('locations.id'))

   #relationships
   products = db.relationship('Product', backref='business')
   categories = db.relationship('Category',backref='business')

   def __init__(self,bus_name,email_addr,logo,phone,description,employees,locations_id):
      self.bus_name = bus_name
      self.email_addr = email_addr
      self.phone = phone
      self.logo = logo
      self.description = description
      self.employees = employees
      self.locations_id = locations_id
