# Represents product categories or business types to help categorize and organize listings.
from backend.db import db
from datetime import datetime

class Category(db.Model):
   __tablename__ = "categories"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = True)
   description = db.Column(db.String(100), unique = True)
   image = db.Column(db.String(255),unique = True)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   businesses_id = db.Column(db.Integer, db.ForeignKey('businesses.id'))
   #relationships
   

   def __init__(self,name,description,image,businesses_id,created_at):
      self.name = name
      self.description = description
      self.image = image
      self.businesses_id = businesses_id
      self.created_at = created_at
