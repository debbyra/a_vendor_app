#importing libraries
from flask import jsonify, request, Blueprint
from backend.carts.model import Cart
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the carts
all_carts = Blueprint('carts', __name__,url_prefix='/carts') 

#create the carts endpoints
# get all
@all_carts.route('/', methods =['GET'])
def carts():
    
     carts= Cart.query.all()
     results = [
            {
                "quantity":cart.quantity,
                "price":cart.price,
                "TT_price":cart.TT_price,
                "status":cart.status,
                "promotion":cart.promotion,
                "coupon_code":cart.coupon_code,
                "created_at": cart.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for cart in carts]
        
     return {"count":len(carts), "carts":results} 


# create new
@all_carts.route('/create', methods =['POST','GET'])
@jwt_required()
def new_cart():
    
    quantity = request.json['quantity']
    price = request.json['price']
    TT_price = request.json['TT_price']
    status = request.json['status']
    promotion = request.json['promotion']
    coupon_code = request.json['coupon_code']
    created_at = request.json['created_at']

    #validations
    if not quantity:
       return jsonify({'error':"Enter quantity"}), 400
    
    if not price:
        return jsonify({'error': "price per item is required"})
    
    if not status:
        return jsonify({'error': "Enter the status"})
    
    if not TT_price:
        return jsonify({'error': "Enter the TT_price"})


    #storing the new carts data
    new_cart = Cart( quantity=quantity, price=price,TT_price=TT_price,promotion=promotion, coupon_code=coupon_code,created_at= created_at)

    #add the new review
    db.session.add(new_cart)
    db.session.commit()
    return jsonify({'success':True, 'message':'New cart added! '}), 201


#reading
@all_carts.route('/cart/<int:id>', methods = ['GET'])
def get_cart(id):
    cart = Cart.query.get_or_404(id)

    response = {
            "id":cart.id,
            "quantity":cart.quantity,
            "str_address":cart.str_address,
            "TT_price":cart.TT_price,
            "promotion":cart.promotion,
            "coupun_code":cart.coupon_code,
            "created_at": cart.created_at.strftime('%Y-%m-%d %H:%M:%S')
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_carts.route('/update/<int:id>', methods = ['PATCH'])
def update_cart(id):
     cart = cart.query.get_or_404(id)
     cart.TT_price = request.json['TT_price']
     cart.promotion = request.json['promotion']
     cart.coupon_code = request.json['coupon_code']
     cart.status = request.json['status']

     db.session.add(cart)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_carts.route('/delete/<int:id>',methods = ['DELETE'])
def delete_cart(id):
     cart = cart.query.get_or_404(id)
     db.session.delete(cart)
     db.session.commit()
     return jsonify({'message':f'{cart.name} successfully deleted'})
