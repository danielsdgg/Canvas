from flask import jsonify, make_response, Blueprint, request
from models import Week 
from schemas import WeekSchema  
from flask_cors import CORS


weeks = Blueprint('weeks', __name__)
CORS(weeks)

# Initialize the WeekSchema
week_schema = WeekSchema() 
weeks_schema = WeekSchema(many=True) 

# Create a new week
@weeks.route('/weeks', methods=['POST'])
def create_week():
    week_data = request.get_json()  
    week = week_schema.load(week_data)  
    new_week = Week(**week)  
    new_week.save()  
    return make_response(week_schema.dump(new_week), 201)  

# Get all weeks
@weeks.route('/weeks', methods=['GET'])
def get_all_weeks():
    week_list = Week.query.all()  
    return make_response(weeks_schema.dump(week_list), 200)  

# Get one week
@weeks.route('/weeks/<int:week_id>', methods=['GET'])
def get_week_detail(week_id):
    week = Week.query.get(week_id)  
    if not week:
        return jsonify({'error': 'Week not found'}), 404  

    return make_response(week_schema.dump(week), 200)  

# Update a week
@weeks.route('/weeks/<int:week_id>', methods=['PUT'])
def update_week(week_id):
    week = Week.query.get(week_id)  
    if not week:
        return jsonify({'error': 'Week not found'}), 404  

    week_data = request.get_json()  
    updated_week = week_schema.load(week_data, instance=week, partial=True)  
    updated_week.save()  
    return make_response(week_schema.dump(updated_week), 200) 

# Delete a week
@weeks.route('/weeks/<int:week_id>', methods=['DELETE'])
def delete_week(week_id):
    week = Week.query.get(week_id) 
    if not week:
        return jsonify({'error': 'Week not found'}), 404  

    week.delete()  
    return jsonify({'message': 'Week deleted successfully'}), 204 
