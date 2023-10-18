# Represents shopping carts for customers to add and manage products before placing an order.
from backend.db import db
from datetime import datetime

class Cart(db.Model):
   __tablename__ = "carts"
   id = db.Column(db.Integer, primary_key = True)
   quantity = db.Column(db.String(100),unique = False)
   price = db.Column(db.Integer,unique = True)
   TT_price = db.Column(db.Integer,unique = True)
   status = db.Column(db.String(50),unique = True)
   promotion = db.Column(db.String(255),unique = True)
   coupon_code = db.Column(db.String(255),unique = True)
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
      