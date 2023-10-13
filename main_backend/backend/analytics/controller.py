#importing libraries
from flask import jsonify, request, Blueprint
from backend.analytics.model import Analysis
from flask_jwt_extended import jwt_required
from backend.db import db

#creating a blue print of the analytics
all_analytics = Blueprint('analytics', __name__,url_prefix='/analytics') 

#create the analytics endpoints
@all_analytics.route('/', methods =['GET'])
def analytics():
    
     analytics= Analysis.query.all()
     results = [
            {
                "event_name":analysis.event_name,
                "time_stamp":analysis.time_stamp,
                "event_type":analysis.event_type,
            }for analysis in analytics]
        
     return {"count":len(analytics), "analytics":results} 


@all_analytics.route('/create', methods =['POST','GET'])
@jwt_required()
def new_analysis():
    
    event_name = request.json['event_name']
    time_stamp = request.json['time_stamp']
    event_type = request.json['event_type']
    

    #validations
    if not event_name:
       return jsonify({'error':"Enter event name.."}), 400
    
    if not time_stamp:
        return jsonify({'error': "Enter the time_stamp"})
    
    if not event_type:
        return jsonify({'error': "Event type required"})


    #storing the new reviews data
    new_analysis = Analysis( event_name=event_name, time_stamp=time_stamp,event_type=event_type)

    #add the new review
    db.session.add(new_analysis)
    db.session.commit()
    return jsonify({'success':True, 'message':'Analysis added! '}), 201


#reading
@all_analytics.route('/analysis/<int:id>', methods = ['GET'])
def get_analysis(id):
    analysis = Analysis.query.get_or_404(id)

    response = {
            "id":analysis.id,
            "event_name":analysis.event_name,
            "event_type":analysis.event_type,
            "time_stamp":analysis.time_stamp
        } 
    db.session.add(analysis)
    db.session.commit()
    return jsonify({'message':'successful '})

#updating
@all_analytics.route('/update/<int:id>', methods = ['PATCH'])
def update_analysis(id):
     analysis = Analysis.query.get_or_404(id)
     analysis.event_name = request.json['event_name']
     analysis.time_stamp = request.json['time_stamp']
     analysis.event_type = request.json['event_type']

     db.session.add(analysis)
     db.session.commit()
     return jsonify({'message':'successfully updated'})

#deleting
@all_analytics.route('/delete/<int:id>',methods = ['DELETE'])
def delete_analysis(id):
     analysis = Analysis.query.get_or_404(id)
     db.session.delete(analysis)
     db.session.commit()
     return jsonify({'message':f'{analysis.name} successfully deleted'})
