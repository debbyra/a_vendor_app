#importing libraries
from flask import jsonify, request, Blueprint
from backend.locations.model import Location
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_locations = Blueprint('locations', __name__,url_prefix='/locations') 

#create the locations endpoints
# get all
@all_locations.route('/', methods =['GET'])
def locations():
    
     locations= Location.query.all()
     results = [
            {
                "lo_name":location.lo_name,
                "strt_address":location.strt_address,
                "phone":location.phone,
                "city":location.city,
                "facilities":location.facilities
            }for location in locations]
        
     return {"count":len(locations), "locations":results} 

# create new
@all_locations.route('/create', methods =['POST','GET'])
@jwt_required()
def new_location():
    
    lo_name = request.json['lo_name']
    strt_address = request.json['strt_address']
    phone = request.json['phone']
    city = request.json['city']
    facilities = request.json['facilities']

    #validations
    if not lo_name:
       return jsonify({'error':"location name is required"}), 400
    
    if not strt_address:
        return jsonify({'error': "Enter the strt_address"})
    
    if not city:
        return jsonify({'error': "Enter the city"})
    
    if not phone:
        return jsonify({'error': "Enter the phone"})


    #storing the new reviews data
    new_location = Location( lo_name=lo_name, strt_address=strt_address,phone=phone,facilities=facilities)

    #add the new review
    db.session.add(new_location)
    db.session.commit()
    return jsonify({'success':True, 'message':'New location stored! '}), 201


#reading
@all_locations.route('/location/<int:id>', methods = ['GET'])
def get_location(id):
    location = Location.query.get_or_404(id)

    response = {
            "id":location.id,
            "lo_name":location.lo_name,
            "str_address":location.str_address,
            "phone":location.phone
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_locations.route('/update/<int:id>', methods = ['PATCH'])
def update_location(id):
     location = Location.query.get_or_404(id)
     location.phone = request.json['phone']

     db.session.add(location)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_locations.route('/delete/<int:id>',methods = ['DELETE'])
def delete_location(id):
     location = Location.query.get_or_404(id)
     db.session.delete(location)
     db.session.commit()
     return jsonify({'message':f'{location.name} successfully deleted'})
