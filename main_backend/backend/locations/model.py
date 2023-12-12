# Represents geographic locations, which can be associated with businesses for search and location-based features.
from backend.db import db

class Location(db.Model):
   __tablename__ = "locations"

   from backend.businesses.model import Business
   
   id = db.Column(db.Integer, primary_key = True)
   lo_name = db.Column(db.String(100), unique = False)
   strt_address = db.Column(db.String(100), unique = True)
   phone = db.Column(db.String(15),unique = True)
   city = db.Column(db.String(100),unique = False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   
   #relationships
   businesses = db.relationship('Business', backref='location')   

   def __init__(self,lo_name,strt_address,city,phone):
      self.lo_name = lo_name
      self.strt_address = strt_address
      self.phone = phone
      self.city = city
