<<<<<<< HEAD
from backend.users.model import User, UserSchema
=======
from backend.users.model import User , UserSchema
>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928
from backend.db import db
from werkzeug.security import check_password_hash,generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token
from flask import Blueprint,request,jsonify 

auth = Blueprint('auth',__name__,url_prefix='/auth') #the auth blueprint

#registering a new user
@auth.route('/register/<user_type>', methods=['POST'])
def create_user(user_type):
    data = request.get_json()

    if request.method == "POST":
<<<<<<< HEAD
        first_name = request.json.get('first_name')
        last_name = request.json.get('last_name')
        email = data.get('email')
        contact = data.get('contact')
        password = data.get('password')
=======
          
      name = data['name']
      email = data['email']
      contact = data['contact']
      password = data['password']
      # locations_id = data['locations_id']
      
  
      #validating the attributes so as to secure the services rendered by the application
      if not contact:
              return jsonify({'error':"Please enter your contact"})
      
      if not name:
              return jsonify({'error':"Name is required"})
      
>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928

        if not contact:
            return jsonify({'message': "Please enter your contact"}), 400

        elif not first_name:
            return jsonify({'message': "First name is required"}), 400

        elif not last_name:
            return jsonify({'message': "Last name is required"}), 400

        elif len(first_name) < 4:
            return jsonify({'message': "First name should not be less than four characters"}), 400

        elif len(last_name) < 4:
            return jsonify({'message': "Last name should not be less than four characters"}), 400

<<<<<<< HEAD
        elif len(password) < 6:
            return jsonify({'message': "Password is not sufficient"}), 400

        existing_contact = User.query.filter_by(contact=contact).first()
        if existing_contact:
            return jsonify({'message': "Phone number is already in use"}), 409
        
        existing_email = User.query.filter_by(email=email).first()
        if existing_email:
            return jsonify({'message': "Email is already in use"}), 409

        hashed_password = generate_password_hash(password)
        new_user = User(first_name=first_name, last_name=last_name, email=email, contact=contact,
                        password=hashed_password, user_type=user_type)

        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Successfully registered new user', 'data': UserSchema().dump(new_user)}), 201
=======
      #creating a hashed password for more security of the database
      hashed_password = generate_password_hash(password=data['password'])
      new_user = User(name=name,email=email,contact=contact,password=hashed_password) 
      
      #inserting values
      db.session.add(new_user)
      db.session.commit()
      return jsonify({'message':'Sucessfully registered new user','data':UserSchema().dump(new_user)}),201

#if the method is GET.
    elif request.method == "GET":
        users= User.query.all()
        user_schema = UserSchema(many=True)
        output = user_schema.dump(users)
        return jsonify({
            "success":True,
            "data":output,
            "total":len(users)  #return the total of the users of the application
        })
>>>>>>> d37283c3019152dcc2b047a9ab5760e14a9f1928
    

#user login
@auth.route("/login", methods=["POST"])
def login():
    contact = request.json.get("contact")
    password = request.json.get("password")
    user = User.query.filter_by(contact=contact).first()

    if not contact or not password:
        return jsonify({"message": "Both email and password are required"}), 400
  
    
    if user:
      check_password = check_password_hash(user.password, password)
      
      if check_password:
          access_token = create_access_token(identity=user.id) #to make JSON Web Tokens for authentication
          refresh = create_refresh_token(identity=user.id)

          return jsonify({
          "message":"Successfully logged in a user",
          "access_token":access_token,
          "refresh_token":refresh,
          "user_type": user.user_type,
          "for": {
              "name": f"{user.first_name} {user.last_name}",
              "id": user.id,
              "first_name": user.first_name,
          }}) #to access a token
      else:
        return jsonify({"message": "Invalid password"}), 401
    else:
        return jsonify({"message": "contact doesn't exist"}), 401  

