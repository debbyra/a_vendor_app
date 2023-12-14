from backend.users.model import User, UserSchema
from backend.db import db
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token
from flask import Blueprint, request, jsonify

auth = Blueprint('auth', __name__, url_prefix='/auth')  # the auth blueprint

# registering a new user
@auth.route('/register/<user_type>', methods=['POST'])
def create_user(user_type):
    data = request.get_json()

    if request.method == "POST":

        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        contact = data['contact']
        password = data['password']
        # locations_id = data['locations_id']

        # validating the attributes so as to secure the services rendered by the application
        if not contact:
            return jsonify({'error': "Please enter your contact"})

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

        # creating a hashed password for more security of the database
        hashed_password = generate_password_hash(password=data['password'])
        new_user = User(first_name=first_name, email=email, contact=contact, password=hashed_password,
                        last_name=last_name)

        # inserting values
        db.session.add(new_user)
        db.session.commit()
        return jsonify({'message': 'Successfully registered new user', 'data': UserSchema().dump(new_user)}), 201

    # if the method is GET.
    elif request.method == "GET":
        users = User.query.all()
        user_schema = UserSchema(many=True)
        output = user_schema.dump(users)
        return jsonify({
            "success": True,
            "data": output,
            "total": len(users)  # return the total of the users of the application
        })

# user login
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
            access_token = create_access_token(identity=user.id)  # to make JSON Web Tokens for authentication
            refresh = create_refresh_token(identity=user.id)

            return jsonify({
                "message": "Successfully logged in a user",
                "access_token": access_token,
                "refresh_token": refresh,
                "user_type": user.user_type,
                "for": {
                    "name": f"{user.first_name} {user.last_name}",
                    "id": user.id,
                    "first_name": user.first_name,
                }})  # to access a token
        else:
            return jsonify({"message": "Invalid password"}), 401
    else:
        return jsonify({"message": "contact doesn't exist"}), 401
