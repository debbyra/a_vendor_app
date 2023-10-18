#importing libraries
from flask import jsonify, request, Blueprint
from backend.orders.model import Order
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_orders = Blueprint('orders', __name__,url_prefix='/orders') 

#create the orders endpoints
# get all
@all_orders.route('/', methods =['GET'])
def orders():
    
     orders= Order.query.all()
     results = [
            {
                "id":orders.id,
                "name":orders.name,
                "quantity":orders.quantity,
                "status":order.status,
                "order_date":order.order_date,
                "created_at": order.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for order in orders]
        
     return {"count":len(orders), "orders":results} 

# create new
@all_orders.route('/create', methods =['POST','GET'])
def new_order():
    
    name = request.json['name']
    quantity = request.json['quantity']
    status = request.json['status']
    order_date = request.json['order_date']
    users_id = request.json['users_id']
    carts_id = request.json['carts_id']
    products_id = request.json['products_id']

    #validations
    if not name:
       return jsonify({'error':"name is required"}), 400
    
    if not quantity:
        return jsonify({'error': "Enter the quantity"})

    #storing the new reviews data
    new_order = Order( name=name, quantity=quantity,status=status,order_date=order_date,users_id=users_id,carts_id=carts_id,products_id=products_id)

    #add the new review
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'success':True, 'message':'Order successful! '}), 201


#reading
@all_orders.route('/order/<int:id>', methods = ['GET'])
def get_order(id):
    order = Order.query.get_or_404(id)

    response = {
            "id":order.id,
            "name":order.name,
            "quantity":order.quantity,
            "status":order.status,
            "order_date":order.order_date,
            "created_at": order.created_at.strftime('%Y-%m-%d %H:%M:%S'),
            "users_id":order.users_id,
            "carts_id":order.carts_id,
            "products_id":order.products_id
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_orders.route('/update/<int:id>', methods = ['PATCH'])
def update_order(id):
     order = Order.query.get_or_404(id)
     order.name = request.json['name']
     order.quantity = request.json['quantity']
     order.status = request.json['status']

     db.session.add(order)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@jwt_required()
@all_orders.route('/delete/<int:id>',methods = ['DELETE'])
def delete_order(id):
     order = Order.query.get_or_404(id)
     db.session.delete(order)
     db.session.commit()
     return jsonify({'message':f'{order.name} successfully deleted'})
