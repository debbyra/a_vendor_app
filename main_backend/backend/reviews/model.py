# Represents customer reviews or ratings for businesses or products, including review text, rating, and reviewer information.
from backend.db import db
from datetime import datetime

# POS point of sale
class Review(db.Model):
   __tablename__ = "reviews"
   id = db.Column(db.Integer, primary_key = True)
   review = db.Column(db.String(255), nullable = True, unique = False)
   users_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   orders_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   
   def __init__(self,review,users_id,orders_id):
      self.review = review
      self.users_id = users_id
      self.orders_id = orders_id

# intergrate into the shopkeepers class