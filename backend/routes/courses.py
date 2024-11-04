from flask import jsonify, request, make_response, Blueprint
from flask_login import login_required, current_user
from models import Course, db, Lesson
from schemas import CourseSchema
from flask_cors import CORS
from functools import wraps

courses = Blueprint('courses', __name__)
CORS(courses)

def role_required(role):
    def wrapper(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            if not current_user.is_authenticated or current_user.role != role:
                return jsonify({"error": "Access denied"}), 403
            return f(*args, **kwargs)
        return decorated_function
    return wrapper

# Home route for courses
@courses.route('/')
def home():
    return jsonify({'message': 'Welcome to the courses API'})


# Get all courses (public access)
@courses.route('/courses', methods=['GET'])
def get_all_courses():
    course_list = Course.query.all()
    course_data = CourseSchema(many=True).dump(course_list)
    return make_response(jsonify(course_data), 200)


# Get one course by ID (public access)
@courses.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)
    
    if course is None:
        return make_response(jsonify({"error": "Course not found"}), 404)

    # Serialize course data including lessons
    course_data = {
        "id": course.id,
        "title": course.title,
        "description": course.description,
        "instructor": course.instructor,
        "term": course.term,
        "lessons": [
            {
                "id": lesson.id,
                "title": lesson.title,
                "description": lesson.description,
                "order": lesson.order,
                "materials": lesson.materials
            }
            for lesson in course.lessons
        ]
    }
    return jsonify(course_data)


# Posting a new course with multiple lessons (requires superuser/admin access)
@courses.route('/post_courses', methods=['POST'])
@login_required
@role_required('superuser')  # Ensure only superusers can access this route
def create_course():
    data = request.get_json()
    lessons_data = data.pop('lessons', [])  # Extract lessons data from request

    # Deserialize the course data using schema
    courses = CourseSchema().load(data)
    new_course = Course(**courses)
    
    db.session.add(new_course)
    db.session.flush()  # Flush to get the new course ID without committing

    # Create lessons and associate them with the course
    for lesson_data in lessons_data:
        new_lesson = Lesson(course_id=new_course.id, **lesson_data)
        db.session.add(new_lesson)

    db.session.commit()

    # Serialize the created course data to JSON format
    course_data = CourseSchema().dump(new_course)
    return make_response(jsonify(course_data), 201)


# Delete a course by ID (requires superuser access)
@courses.route('/delete_course/<int:id>', methods=['DELETE'])
@login_required
@role_required('superuser')  # Ensure only superusers can delete courses
def delete_course(id):
    course = Course.query.get_or_404(id)

    # Delete associated lessons
    Lesson.query.filter_by(course_id=course.id).delete()

    db.session.delete(course)
    db.session.commit()

    return make_response(jsonify({"message": "Course deleted successfully"}), 200)
