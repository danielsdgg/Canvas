from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from models import User, db
from flask_jwt_extended import jwt_required, get_jwt_identity

users_bp = Blueprint('users', __name__)

@users_bp.route('/admin/users', methods=['POST'])
@jwt_required()
def create_user():
    current_user = get_jwt_identity()
    if current_user['role'] != 'superuser':
        return jsonify({'msg': 'Access denied'}), 403

    username = request.json.get('username')
    password = generate_password_hash(request.json.get('password'))
    role = request.json.get('role')  # 'admin' or 'student'

    new_user = User(username=username, password=password, role=role)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'msg': 'User created'}), 201
