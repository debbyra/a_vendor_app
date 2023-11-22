#importing libraries
from flask import jsonify, request, Blueprint
from backend.notifications.model import Notification
from flask_jwt_extended import jwt_required
from backend.db import db

#create a blue print 
all_notifications = Blueprint('notifications', __name__,url_prefix='/notifications') 

#create the notifications endpoints
# get all
@all_notifications.route('/', methods =['GET'])
def notifications():
    
     notifications= Notification.query.all()
     results = [
            {
                "id":notification.id,
                "description":notification.description,
                "users_id":notification.users_id
            }for notification in notifications]
        
     return {"count":len(notifications), "notifications":results} 

# create new
@all_notifications.route('/create', methods =['POST','GET'])

def new_notification():
    
    description = request.json['description']
    users_id = request.json['users_id']

    #validations
    if not description:
       return jsonify({'error':"description is required"}), 400

    #storing the new data
    new_description = Notification( description=description,users_id=users_id)

    #add the new data
    db.session.add(new_description)
    db.session.commit()
    return jsonify({'success':True, 'message':'Successful! '}), 201


#reading
@all_notifications.route('/notification/<int:id>', methods = ['GET'])
def get_notification(id):
    notification = Notification.query.get_or_404(id)

    response = {
            "id":notification.id,
            "description":notification.description,
            "users_id":notification.users_id
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_notifications.route('/update/<int:id>', methods = ['PATCH'])
def update_order(id):
     notification = Notification.query.get_or_404(id)
     notification.description = request.json['description']
     notification.users_id = request.json['users_id']

     db.session.add(notification)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_notifications.route('/delete/<int:id>',methods = ['DELETE'])
def delete_notification(id):
     notification = Notification.query.get_or_404(id)
     db.session.delete(notification)
     db.session.commit()
     return jsonify({'message':'notification deleted successfully'})
