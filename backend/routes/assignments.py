from flask import jsonify, make_response, Blueprint, request
from models import Assignment  
from schemas import AssignmentSchema  
from flask_cors import CORS

# Create a blueprint for assignments
assignments = Blueprint('assignments', __name__)
CORS(assignments)

# Initialize the AssignmentSchema
assignment_schema = AssignmentSchema() 
assignments_schema = AssignmentSchema(many=True) 

# Create a new assignment
@assignments.route('/assignments', methods=['POST'])
def create_assignment():
    assignment_data = request.get_json()  
    assignment = assignment_schema.load(assignment_data) 
    new_assignment = Assignment(**assignment)  
    new_assignment.save() 
    return make_response(assignment_schema.dump(new_assignment), 201) 

# Get all assignments
@assignments.route('/assignments', methods=['GET'])
def get_all_assignments():
    assignment_list = Assignment.query.all()  
    return make_response(assignments_schema.dump(assignment_list), 200)  

# Get one assignment
@assignments.route('/assignments/<int:assignment_id>', methods=['GET'])
def get_assignment_detail(assignment_id):
    assignment = Assignment.query.get(assignment_id) 
    if not assignment:
        return jsonify({'error': 'Assignment not found'}), 404 

    return make_response(assignment_schema.dump(assignment), 200)  

# Update an assignment
@assignments.route('/assignments/<int:assignment_id>', methods=['PUT'])
def update_assignment(assignment_id):
    assignment = Assignment.query.get(assignment_id)  
    if not assignment:
        return jsonify({'error': 'Assignment not found'}), 404  

    assignment_data = request.get_json()  
    updated_assignment = assignment_schema.load(assignment_data, instance=assignment, partial=True)  
    updated_assignment.save()  
    return make_response(assignment_schema.dump(updated_assignment), 200) 

# Delete an assignment
@assignments.route('/assignments/<int:assignment_id>', methods=['DELETE'])
def delete_assignment(assignment_id):
    assignment = Assignment.query.get(assignment_id)  
    if not assignment:
        return jsonify({'error': 'Assignment not found'}), 404  

    assignment.delete() 
    return jsonify({'message': 'Assignment deleted successfully'}), 204  
