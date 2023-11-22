#importing libraries
from flask import jsonify, request, Blueprint
from backend.products.model import Product
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_products = Blueprint('products', __name__,url_prefix='/products') 

#create the products endpoints
# get all
@all_products.route('/', methods =['GET'])
def products():
    
     products= Product.query.all()
     results = [
            {
                "id":product.id,
                "name":product.name,
                "price":product.price,
                "image":product.image,
                "origin":product.origin,
                "created_at": product.created_at.strftime('%Y-%m-%d %H:%M:%S'),
                "businesses_id":product.businesses_id
            }for product in products]
        
     return {"count":len(products), "products":results} 

# create new
@all_products.route('/create', methods =['POST','GET'])
def new_product():
    
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    origin = request.json['origin']
    businesses_id = request.json['businesses_id']


    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not price:
        return jsonify({'error': "Enter the price"})
    
    if not image:
        return jsonify({'error':"Add an image"})

    #storing the new reviews data
    new_product = Product( name=name, price=price, origin=origin, image=image, businesses_id=businesses_id)

    #add the new review
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'success':True, 'message':'product has been added! '}), 201


#reading
@all_products.route('/product/<int:id>', methods = ['GET'])
def get_product(id):
    product = Product.query.get_or_404(id)

    response = {
            "id":product.id,
            "name":product.name,
            "price":product.price,
            "image":product.image,
            "origin":product.origin,
            "created_at": product.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            "businesses_id":product.businesses_id,
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_products.route('/update/<int:id>', methods = ['PATCH'])
def update_review(id):
     product = Product.query.get_or_404(id)
     product.name = request.json['name']
     product.price = request.json['price']

     db.session.add(product)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_products.route('/delete/<int:id>',methods = ['DELETE'])
def delete_product(id):
     product = Product.query.get_or_404(id)
     db.session.delete(product)
     db.session.commit()
     return jsonify({'message':f'{product.name} successfully deleted'})
