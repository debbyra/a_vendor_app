#importing libraries
from flask import jsonify, request, Blueprint
from werkzeug.security import check_password_hash, generate_password_hash
from backend.users.model import User
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the users
all_users = Blueprint('users', __name__,url_prefix='/users') 

#create the users endpoints
# get all
@all_users.route('/')
def users():   
     users= User.query.all()
     results = [
            {
               "id":user.id,
               "first_name":user.first_name,
               "last_name":user.last_name,
               "password":user.password,
               "email":user.email,
               "contact":user.contact,
               "created_at": user.created_at.strftime('%Y-%m-%d %H:%M:%S'),
               "locations_id":user.locations_id
            }for user in users]
        
     return {"count":len(users), "users":results} 

#creating
@all_users.route('/create', methods =['GET','POST'])
def new_user():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']
    contact = request.json['contact']
    locations_id = request.json['locations_id']

    #validations
    if not first_name:
       return jsonify({'error':"first name is required"}), 400
    
    if not last_name:
       return jsonify({'error':"last name is required"}), 400
    
    if len(first_name) < 4:
        return jsonify({'error':"first name should not be less than four characters"})
    
    if len(last_name) < 4:
        return jsonify({'error':"last name should not be less than four characters"})
    
    if not password:
        return jsonify({'error':"password is required"})
    
    if len(password) < 6:
        return jsonify({'password should be longer than 6 characters'})
    
    if not email:
        return jsonify({'error':'email is required'})

    
    #constraints    
    if User.query.filter_by(password = password).first():
        return jsonify({'message':'This password is already in use'}),409

    if User.query.filter_by(email = email).first():
        return jsonify({'message':'This email has already been taken'}),409
    

    #storing the new reviews data
     #creating a hashed password for the database
    hashed_password = generate_password_hash(password)
    new_user = User(first_name=first_name, last_name=last_name, password=hashed_password, email=email, contact=contact,locations_id=locations_id)

    #add the new review
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success':True, 'message':'You have successfully registered'}), 201

#reading 
@all_users.route('/user/<int:id>', methods = ['GET'])
def get_user(id):
    user = User.query.get_or_404(id)

    response = {
            "id":user.id,
            "first_name":user.first_name,
            "last_name":user.last_name,
            "user_type":user.user_type,
            "email":user.email,
            "contact":user.contact,
            "password":user.password,
            "created_at": user.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            "locations_id":user.locations_id
        } 

    db.session.add(response)
    db.session.commit() 
    return jsonify({'success': True, 'user': response, 'message':'success'})

#updating
@all_users.route('/update/<int:id>', methods = ['PATCH'])
def update_user(id):
     user = User.query.get_or_404(id)
     user.password = request.json['password']

     db.session.add(user)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_users.route('/delete/<int:id>',methods = ['DELETE'])
@jwt_required()
def delete_user(id):
     user = User.query.get_or_404(id)
     db.session.delete(user)
     db.session.commit()
     return jsonify({'message':f'{user.name} successfully deleted'})