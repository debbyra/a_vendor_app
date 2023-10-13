# Represents notifications sent to users or businesses regarding orders, updates, or other events.
from backend.db import db

class Notification(db.Model):
   __tablename__ = "notification"
   id = db.Column(db.Integer, primary_key = True)
   description = db.Column(db.String(100), unique = False)
   orders_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
   users_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   
   #relationships
   

   def __init__(self,description, orders_id, users_id):
      self.description = description
      self.orders_id = orders_id
      self.users_id = users_id
      