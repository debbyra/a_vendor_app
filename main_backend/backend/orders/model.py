# Represents customer orders, including order details, order status, customer information, and purchased items.
from backend.db import db
from datetime import datetime

class Order(db.Model):
   __tablename__ = "orders"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = False)
   quantity = db.Column(db.String(20), unique = False)
   status = db.Column(db.String(35),nullable = False, unique = False)
   order_date = db.Column(db.String(35),nullable = True, unique = False)
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   carts_id = db.Column(db.Integer, db.ForeignKey('carts.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   #relationships

   def __init__(self,name,quantity,status,order_date,user_id,carts_id):
      self.name = name
      self.quantity = quantity
      self.status = status
      self.order_date = order_date
      self.user_id = user_id
      self.carts_id = carts_id








