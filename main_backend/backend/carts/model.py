# Represents shopping carts for customers to add and manage products before placing an order.
from backend.db import db
from datetime import datetime
# CRM

class Cart(db.Model):
   __tablename__ = "carts"

   from backend.orders.model import Order

   id = db.Column(db.Integer, primary_key = True)
   quantity = db.Column(db.String(100),unique = False)
   price = db.Column(db.Integer,unique = False)
   TT_price = db.Column(db.Integer,unique = False)
   status = db.Column(db.String(50),unique = False)
   promotion = db.Column(db.String(255),unique = False)
   coupon_code = db.Column(db.String(255),unique = False)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   #relationships
   orders = db.relationship('Order',backref='cart')
   

   def __init__(self,quantity,price,status,TT_price,promotion,coupon_code):
      self.quantity = quantity
      self.price = price
      self.TT_price = TT_price
      self.status = status
      self.promotion = promotion
      self.coupon_code = coupon_code
      

# delivery system model should be added using boda bodas
# delivery fees from the customer 
# add function to assign a delivery
# design an efficient supply chain
