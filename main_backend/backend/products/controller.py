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
@jwt_required()
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
@jwt_required()
def new_product():
    name = request.json.get('name')
    price = request.json.get('price')
    quantity = request.json.get('quantity')
    image_url = request.json.get('image_url')
    video_url = request.json.get('video_url')


    #validations
    if not name or not price or not quantity:
        return jsonify({'error': "Name, price, and quantity are required"}), 400

    if (image_url and video_url) or (not image_url and not video_url):
        return jsonify({'error': "Provide either an image URL or a video URL, not both or none"}), 400

    #storing the new reviews data
    new_product = Product(
        name=name,
        price=price,
        quantity=quantity,
        image_url=image_url,
        video_url=video_url
    )

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
            "quantity":product.quantity,
            "image":product.image_url,
            "video": product.video_url,
            "created_at": product.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            "businesses_id":product.businesses_id,
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_products.route('/update/<int:id>', methods = ['PATCH'])
@jwt_required()
def update_review(id):
     product = Product.query.get_or_404(id)
     product.name = request.json['name']
     product.price = request.json['price']

     db.session.add(product)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_products.route('/delete/<int:id>',methods = ['DELETE'])
@jwt_required()
def delete_product(id):
     product = Product.query.get_or_404(id)
     db.session.delete(product)
     db.session.commit()
     return jsonify({'message':f'{product.name} successfully deleted'})
