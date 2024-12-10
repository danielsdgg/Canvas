from flask import Blueprint, jsonify
from flask_login import login_required, current_user

protected_bp = Blueprint('protected', __name__)

@protected_bp.route('/courses', methods=['GET'])
@login_required
def view_courses():
    # Allow all users to view courses
    return jsonify({'message': 'Here are the courses (frontend handles the details)'}), 200

@protected_bp.route('/admin', methods=['GET'])
@login_required
def admin_panel():
    if current_user.role not in ['Superadmin', 'Admin']:
        return jsonify({'error': 'Unauthorized access'}), 403

    return jsonify({'message': 'Welcome to the admin panel'}), 200

@protected_bp.route('/superadmin', methods=['GET'])
@login_required
def superadmin_panel():
    if current_user.role != 'Superadmin':
        return jsonify({'error': 'Unauthorized access'}), 403

    return jsonify({'message': 'Welcome to the Superadmin panel'}), 200
