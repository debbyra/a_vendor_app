#importing libraries
from flask import jsonify, request, Blueprint
from backend.categories.model import Category
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_categories = Blueprint('categories', __name__,url_prefix='/categories') 

#create the categories endpoints
# get all
@all_categories.route('/', methods =['GET'])
def categories():
    
     categories= Category.query.all()
     results = [
            {
                "name":category.name,
                "strt_address":category.strt_address,
                "phone":category.phone,
                "city":category.city,
                "facilities":category.facilities,
                "created_at": category.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for category in categories]
        
     return {"count":len(categories), "categories":results} 

# create new
@all_categories.route('/create', methods =['POST','GET'])
@jwt_required()
def new_category():
    
    name = request.json['name']
    strt_address = request.json['strt_address']
    phone = request.json['phone']
    city = request.json['city']
    facilities = request.json['facilities']
    created_at = request.json['created_at']

    #validations
    if not name:
       return jsonify({'error':"category name is required"}), 400
    
    if not strt_address:
        return jsonify({'error': "Enter the strt_address"})
    
    if not city:
        return jsonify({'error': "Enter the city"})
    
    if not phone:
        return jsonify({'error': "Enter the phone"})
    
    if not facilities:
        return jsonify({'error': "Enter the facilities"})


    #storing the new reviews data
    new_category = Category( name=name, strt_address=strt_address,phone=phone)

    #add the new review
    db.session.add(new_category)
    db.session.commit()
    return jsonify({'success':True, 'message':'New category stored! '}), 201


#reading
@all_categories.route('/category/<int:id>', methods = ['GET'])
def get_category(id):
    category = Category.query.get_or_404(id)

    response = {
            "id":category.id,
            "name":category.name,
            "str_address":category.str_address,
            "phone":category.phone,
            "facilities":category.facilities,
            "created_at": category.created_at.strftime('%Y-%m-%d %H:%M:%S')
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_categories.route('/update/<int:id>', methods = ['PATCH'])
def update_category(id):
     category = category.query.get_or_404(id)
     category.phone = request.json['phone']
     category.facilities = request.json['facilities']

     db.session.add(category)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_categories.route('/delete/<int:id>',methods = ['DELETE'])
def delete_category(id):
     category = Category.query.get_or_404(id)
     db.session.delete(category)
     db.session.commit()
     return jsonify({'message':f'{category.name} successfully deleted'})
