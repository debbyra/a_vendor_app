from backend.users.model import User
from backend.db import db
from werkzeug.security import check_password_hash,generate_password_hash
from flask_jwt_extended import create_access_token #to make JSON Web Tokens
from flask import Blueprint,request,jsonify 

#importing necessary libraries used in authentication
#Authentication helps keep unauthorised people from using the application and helps people to access services.

#JSON Web Token is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
#It can be used for an authentication system and can also be used for information exchange.

# A token is a set of one or more characters having a meaning together.

#the blueprint organises a group of related endpoints/views
# the request object contains all 
#data sent by the client to the server
#the jsonify returns a response object in a python dictionary form


auth = Blueprint('auth',__name__,url_prefix='/auth') #the auth blueprint


#registering a new user
@auth.route('/register',methods=['GET','POST']) #creating an endpoint for registering a user
def create_user():
    data = request.get_json() #data is storing our properties of the user
    
    if request.method == "POST":
          
      name = data['name']
      email = data['email']
      contact = data['contact']
      password = data['password']
      
  
      #validating the attributes so as to secure the services rendered by the application
      if not contact:
              return jsonify({'error':"Please enter your contact"})
      
      if not name:
              return jsonify({'error':"Name is required"})
      

      if len(password) < 6:
            return jsonify({'error': "Password is not sufficient"}), 400



      if User.query.filter_by(email=email).first() is not None:
        return jsonify({'error': "Email is already existing"}), 409 

    
      if User.query.filter_by(contact=contact).first() is not None:
        return jsonify({'error': "Phone number is already existing"}),409
       

      #creating a hashed password for more security of the database
      hashed_password = generate_password_hash(password=data['password'],method="sha256")
      new_user = User(name=name,email=email,contact=contact,password=hashed_password) 
      
      #inserting values
      db.session.add(new_user)
      db.session.commit()
      return jsonify({'message':'Sucessfully created','data':new_user}),201

#if the method is GET.
    elif request.method == "GET":
        users= User.query.all()
        return jsonify({
            "success":True,
            "data":users,
            "total":len(users)  #return the total of the users of the application
        })
    

#user login
@auth.route("/login", methods=["POST"])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    user = User.query.filter_by(email=email).first()

    if not email or not password:
        return jsonify({"message": "Both email and password are required"})
  
    
    if user:
      
      if user.password == password:
          access_token = create_access_token(identity=user.id) #to make JSON Web Tokens for authentication
          return jsonify({
           "message":"Successfully logged in a user",
          "access_token":access_token,
          "user":user}) #to access a token
      else:
        return jsonify({"message": "Invalid password"})
    else:
        return jsonify({"message": "email address doesn't exist"})  

