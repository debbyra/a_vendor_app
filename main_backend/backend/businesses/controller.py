#importing libraries
from flask import jsonify, request, Blueprint
from backend.businesses.model import Business
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_businesses = Blueprint('businesses', __name__,url_prefix='/businesses') 

#create the businesses endpoints
# get all
@all_businesses.route('/', methods =['GET'])
@jwt_required()
def businesses():
    
     businesses= Business.query.all()
     results = [
            {
                "id":business.id,
                "bus_name":business.bus_name,
                "email_addr":business.email_addr,
                "logo":business.logo,
                "phone":business.phone,
                "description":business.description,
                "employees":business.employees,
                "locations_id":business.locations_id,
                "users_id":business.users_id,
                "created_at": business.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for business in businesses]
        
     return {"count":len(businesses), "businesss":results} 

# create new
@all_businesses.route('/create', methods =['POST','GET'])
@jwt_required()
def new_business():
    
    bus_name = request.json['bus_name']
    email_addr = request.json['email_addr']
    phone = request.json['phone']
    logo = request.json['logo']
    description = request.json['description']
    employees = request.json['employees']
    users_id = request.json['users_id']
    locations_id = request.json['locations_id']

    #validations
    if not bus_name:
       return jsonify({'error':"Enter business name.."}), 400
    
    if len(bus_name) < 5 :
        return jsonify({'error':"Business name cannot be less than 5 characters!"})
    
    if not email_addr:
        return jsonify({'error': "Enter the email_address"})
    
    if not phone:
        return jsonify({'error': "Phone is required"})
    

    #storing the new reviews data
    new_business = Business( bus_name=bus_name,users_id=users_id, email_addr=email_addr,locations_id=locations_id,phone=phone,description=description,logo=logo,employees=employees)

    #add the new review
    db.session.add(new_business)
    db.session.commit()
    return jsonify({'success':True, 'message':'New business added! '}), 200


#reading
@all_businesses.route('/business/<int:id>', methods = ['GET'])
@jwt_required()
def get_business(id):
    business = Business.query.get_or_404(id)

    response = {
            "id":business.id,
            "bus_name":business.bus_name,
            "strt_address":business.strt_address,
            "phone":business.phone,
            "description":business.description,
            "logo":business.logo,
            "locations_id":business.locations_id,
            "users_id":business.users_id
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '}), 200

#updating
@all_businesses.route('/update/<int:id>', methods = ['PATCH'])
@jwt_required()
def update_business(id):
     business = Business.query.get_or_404(id)
     business.bus_name = request.json['bus_name']
     business.phone = request.json['phone']

     db.session.add(business)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_businesses.route('/delete/<int:id>',methods = ['DELETE'])
@jwt_required()
def delete_business(id):
     business = Business.query.get_or_404(id)
     db.session.delete(business)
     db.session.commit()
     return jsonify({'message':f'{business.bus_name} successfully deleted'}) ,200
