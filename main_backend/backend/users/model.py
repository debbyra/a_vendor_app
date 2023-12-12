# Represents user accounts and contains attributes like username, email, password, and user roles (e.g., customer, business owner).
from backend.db import db, ma
from datetime import datetime

class User(db.Model):
   __tablename__ = "users"
   from backend.reviews.model import Review
   from backend.orders.model import Order
   from backend.businesses.model import Business
   from backend.notifications.model import Notification
   from backend.products.model import Product
   
   id:int
   first_name:str
   last_name:str
   email:str
   password:str
   contact:int

   id = db.Column(db.Integer, primary_key = True)
   first_name = db.Column(db.String(255),unique = False)
   last_name = db.Column(db.String(255),unique = False)
   password = db.Column(db.String(255),unique = True)
   email = db.Column(db.String(255),unique = True)
   contact = db.Column(db.Integer,unique = True)
   user_type = db.Column(db.String(50), nullable=False)
   profile_image_url = db.Column(db.String(255))
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

   #relationships
   reviews = db.relationship('Review', backref= 'user')
   orders = db.relationship('Order', backref= 'user')  
   products = db.relationship('Product',backref= 'user')
   businesses = db.relationship('Business',backref='user') 
   notifications = db.relationship('Notification',backref='user')
   locations = db.relationship('Location', backref='user', lazy=True)

   def __repr__(self):
        return f"<User {self.name} >"

   def save(self):
            db.session.add(self)
            db.session.commit()

    #delete the item
   def delete(self):
         db.session.delete(self)
         db.session.commit()
      
class UserSchema(ma.SQLAlchemyAutoSchema):
   class Meta:
      model = User



      