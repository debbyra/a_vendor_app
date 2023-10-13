# Represents data related to app usage and performance tracking... may not be too urgent but it's important in the long run
from backend.db import db

class Analysis(db.Model):
   __tablename__ = "analytics"
   id = db.Column(db.Integer, primary_key = True)
   event_name = db.Column(db.String(100), unique = True)
   time_stamp = db.Column(db.String(100), unique = True)
   event_type = db.Column(db.String(15),unique = True)

   #relationships
   

   def __init__(self,event_name,time_stamp,event_type):
      self.event_name = event_name
      self.time_stamp = time_stamp
      self.event_type = event_type
