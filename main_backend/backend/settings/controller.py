#importing libraries
from flask import jsonify, request, Blueprint
from backend.settings.model import Setting
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the settings
all_settings = Blueprint('settings', __name__,url_prefix='/settings') 

#create the settings endpoints
# get all
@all_settings.route('/', methods =['GET'])
def settings():
    
     settings= Setting.query.all()
     results = [
            {
                "name":setting.name,
                "enabled_disabled":setting.enabled_disabled,
                "role_user":setting.role_user,
                "description":setting.description,
                "created_at": setting.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for setting in settings]
        
     return {"count":len(settings), "orders":results} 

# create new
@all_settings.route('/create', methods =['POST','GET'])
@jwt_required()
def new_setting():
    
    name = request.json['name']
    enabled_disabled = request.json['enabled_disabled']
    role_user = request.json['role_user']
    description = request.json['description']
    created_at = request.json['created_at']

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not enabled_disabled:
        return jsonify({'error': "Status is required"})
    
    if not role_user:
        return jsonify({'error': "Enter field..."})


    #storing the new settings 
    new_setting = Setting( name=name, enabled_disabled=enabled_disabled,role_user=role_user,description=description,created_at=created_at)

    #add the new review
    db.session.add(new_setting)
    db.session.commit()
    return jsonify({'success':True, 'message':'Setting added! '}), 201


#reading
@all_settings.route('/setting/<int:id>', methods = ['GET'])
def get_setting(id):
    setting = Setting.query.get_or_404(id)

    response = {
            "id":setting.id,
            "name":setting.name,
            "enabled_disabled":setting.enabled_disabled,
            "role_user":setting.role_user,
            "description":setting.description,
            "created_at": setting.created_at.strftime('%Y-%m-%d %H:%M:%S')
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_settings.route('/update/<int:id>', methods = ['PATCH'])
def update_setting(id):
     setting = Setting.query.get_or_404(id)
     setting.name = request.json['name']
     setting.enabled_disabled = request.json['enabled_disabled']
     setting.role_user = request.json['role_user']

     db.session.add(setting)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_settings.route('/delete/<int:id>',methods = ['DELETE'])
def delete_setting(id):
     setting = Setting.query.get_or_404(id)
     db.session.delete(setting)
     db.session.commit()
     return jsonify({'message':f'{setting.name} successfully deleted'})
