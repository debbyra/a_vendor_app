# Represents application settings and configurations that can be customized.
from backend.db import db
from datetime import datetime

class Setting(db.Model):
   __tablename__ = "settings"
   id = db.Column(db.Integer, primary_key = True)
   name = db.Column(db.String(100), unique = False)
   enabled_disabled = db.Column(db.String(20), unique = False)
   role_user = db.Column(db.String(35),nullable = False, unique = False)
   description = db.Column(db.String(35),nullable = False)
   created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
   #relationships
   

   def __init__(self,name,enabled_disabled,role_user,description):
      self.name = name
      self.enabled_disabled = enabled_disabled
      self.role_user = role_user
      description = description
      