from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from models import User, db
import re

auth_bp = Blueprint('auth', __name__)

def is_valid_email(email):
    """Validate email format."""
    return re.match(r"[^@]+@[^@]+\.[^@]+", email)

@auth_bp.route('/register', methods=['POST'])
def register():
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    role = request.json.get('role', 'user')  # Default role is 'user'

    # Validate input
    if not email or not username or not password:
        return jsonify({"msg": "Missing fields"}), 400

    if not is_valid_email(email):
        return jsonify({"msg": "Invalid email format"}), 400

    # Check if the user already exists
    if User.query.filter((User.email == email) | (User.username == username)).first():
        return jsonify({"msg": "User already exists"}), 409

    # Create a new user
    try:
        hashed_password = generate_password_hash(password)
        new_user = User(
            email=email,
            username=username,
            password=hashed_password,
            role=role  # Include the role
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User registered successfully"}), 201
    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify({"msg": "Failed to register user", "error": str(e)}), 500



@auth_bp.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity={'username': user.username, 'role': user.role})
        return jsonify(access_token=access_token), 200
    
    return jsonify({'msg': 'Bad username or password'}), 401
