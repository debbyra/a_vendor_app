# Represents notifications sent to users or businesses regarding orders, updates, or other events.
from backend.db import db

class Notification(db.Model):
   __tablename__ = "notification"
   id = db.Column(db.Integer, primary_key = True)
   description = db.Column(db.String(100), unique = False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   
   
   def __init__(self,description, user_id):
      self.description = description
      self.user_id = user_id
      