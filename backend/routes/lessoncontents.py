from flask import jsonify, request, make_response, Blueprint
from models import LessonContent, db, Assignment, Lesson
from schemas import LessonContentSchema, AssignmentSchema
from flask_cors import CORS

lessons = Blueprint('lessons', __name__)
CORS(lessons)

# GET ALL LESSON CONTENTS
@lessons.route('/lessons', methods=['GET'])
def get_all_lessons():
    lesson_list = LessonContent.query.all()
    lessons_data = LessonContentSchema(many=True).dump(lesson_list)
    return make_response(jsonify(lessons_data), 200)

# GET ONE LESSON CONTENT
@lessons.route('/lesson/<int:lesson_id>', methods=['GET'])
def get_lesson(lesson_id):
    # Fetch lesson content with all related assignments
    lesson = LessonContent.query.filter_by(lesson_id=lesson_id).first()

    if lesson is None:
        return jsonify({"error": "Lesson not found"}), 404
    
    # Serialize the lesson content along with its assignments
    lesson_data = LessonContentSchema().dump(lesson)
    
    return jsonify(lesson_data)

# POSTING A NEW LESSON CONTENT WITH ITS ASSIGNMENTS
@lessons.route('/lesson_content', methods=['POST'])
def create_lesson_content():
    data = request.get_json()
    
    # Check if lesson_id is provided in the request
    if 'lesson_id' not in data:
        return jsonify({"error": "lesson_id is required"}), 400
    
    lesson_id = data['lesson_id']
    
    # Check if the lesson_id exists in the database
    lesson = Lesson.query.get(lesson_id)
    if not lesson:
        return jsonify({"error": f"Lesson with id {lesson_id} does not exist"}), 404
    
    # Extract lesson content details
    lesson_content_data = {
        'lesson_id': lesson_id,
        'week_number': data.get('week_number'),
        'content_type': data.get('content_type'),
        'content': data.get('content'),
        'week_start': data.get('week_start'),
        'week_end': data.get('week_end')
    }

    # Create LessonContent instance
    new_lesson_content = LessonContent(**lesson_content_data)
    db.session.add(new_lesson_content)
    db.session.flush()  # to get the new lesson_content id
    
    # Handle assignments (if any)
    assignments_data = data.get('assignments', [])
    for assignment_data in assignments_data:
        assignment_data['lesson_id'] = new_lesson_content.id  # Assign the lesson_content id to the assignment
        new_assignment = Assignment(**assignment_data)
        db.session.add(new_assignment)
    
    db.session.commit()  # Commit after all data is added

    # Return the newly created lesson content with assignments
    lesson_content_response = {
        'lesson_content': LessonContentSchema().dump(new_lesson_content),
        'assignments': [AssignmentSchema().dump(a) for a in new_lesson_content.assignments]
    }

    return make_response(jsonify(lesson_content_response), 201)


# DELETE LESSON
@lessons.route('/lesson/<int:id>', methods=['DELETE'])
def delete_lesson(id):
    lesson = LessonContent.query.get_or_404(id)
    Assignment.query.filter_by(course_id=lesson.id).delete()
    db.session.delete(lesson)
    db.session.commit()

    return make_response(jsonify({'message': 'Lesson deleted successfully'}), 200)
