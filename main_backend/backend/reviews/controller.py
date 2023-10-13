#importing libraries
from flask import jsonify, request, Blueprint
from backend.reviews.model import Review
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the reviews
all_reviews = Blueprint('reviews', __name__,url_prefix='/reviews') 

#create the reviews endpoints
# get all
@all_reviews.route('/', methods =['GET'])
def reviews():
    
     reviews= Review.query.all()
     results = [
            {
                "review":review.review,
                "created_at": review.created_at.strftime('%Y-%m-%d %H:%M:%S')
            }for review in reviews]
        
     return {"count":len(reviews), "reviews":results} 

# create new
@all_reviews.route('/create', methods =['POST','GET'])
@jwt_required()
def new_review():
    
    review = request.json['review']
    created_at = request.json['created_at']

    #validations
    if not review:
       return jsonify({'error':"review is required"}), 400
    

    #storing the new reviews data
    new_review = Review( review=review,created_at=created_at)

    #add the new review
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'success':True, 'message':'Review added! '}), 201


#reading
@all_reviews.route('/review/<int:id>', methods = ['GET'])
def get_review(id):
    review = Review.query.get_or_404(id)

    response = {
            "id":review.id,
            "review":review.review,
            "created_at": review.created_at.strftime('%Y-%m-%d %H:%M:%S')
        } 
    db.session.add(response)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_reviews.route('/update/<int:id>', methods = ['PATCH'])
def update_review(id):
     review = Review.query.get_or_404(id)
     review = request.json['review']
     review.review = review

     db.session.add(review)
     db.session.commit()
     return jsonify({'message':'successfully patched'})

#deleting
@all_reviews.route('/delete/<int:id>',methods = ['DELETE'])
def delete_review(id):
     review = Review.query.get_or_404(id)
     db.session.delete(review)
     db.session.commit()
     return jsonify({'message':f'{review.name} successfully deleted'})
