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
                "id":category.id,
                "name":category.name,
                "description":category.description,
                "image":category.image,
                "businesses_id":category.businesses_id,
                "created_at": category.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for category in categories]
        
     return {"count":len(categories), "categories":results} 

# create new
@all_categories.route('/create', methods =['POST','GET'])
def new_category():
    
    name = request.json['name']
    description = request.json['description']
    image = request.json['image']
    businesses_id = request.json['businesses_id']

    #validations
    if not name:
       return jsonify({'error':"category name is required"}), 400
    
    if not description:
        return jsonify({'error': "Enter the description"})
    
    
    if not image:
        return jsonify({'error': "Enter the image"})
    


    #storing the new reviews data
    new_category = Category( name=name, description=description,image=image,businesses_id=businesses_id)

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
            "image":category.image,
            "businesses_id":category.businesses_id,
            "created_at": category.created_at.strftime('%Y-%m-%d %H:%M:%S')
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_categories.route('/update/<int:id>', methods = ['PATCH'])
def update_category(id):
     category = category.query.get_or_404(id)
     category.name = request.json['name']
     category.image = request.json['image']
     category.description = request.json['description']

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
