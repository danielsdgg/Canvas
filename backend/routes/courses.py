from flask import jsonify, request, make_response, Blueprint
from models import Courses, db, Lesson
from schemas import CoursesSchema
from flask_cors import CORS

courses = Blueprint('courses', __name__)
CORS(courses)

@courses.route('/courses', methods=['POST'])
def add_course():
    return 'course added'

@courses.route('/')
def home():
    return jsonify({'message': 'Welcome to courses'})

# get all courses
@courses.route('/courses', methods=['GET'])
def get_all_courses():
    course_list = Courses.query.all()
    course_data = CoursesSchema(many = True).dump(course_list)
    return make_response(jsonify(course_data), 200)

# get one course
@courses.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Courses.query.get(course_id)

    if course is None:
        return jsonify({"error": "Course not found"}), 404

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

# posting a new course with multiple lessons
@courses.route('/post_courses', methods=['POST'])
def create_course():
    data = request.get_json()
    lessons_data = data.pop('lessons', [])  # Make sure this matches your input JSON

    # Deserialize the course data using schema
    courses = CoursesSchema().load(data)
    new_course = Courses(**courses)
    
    db.session.add(new_course)
    db.session.flush()  # Flush to get the new course ID without committing

    # Iterate over each lesson and assign it to the course
    for lesson_data in lessons_data:
        # Ensure that we're creating Lesson instances
        new_lesson = Lesson(course_id=new_course.id, **lesson_data)
        db.session.add(new_lesson)

    # Commit the entire transaction, including lessons and course
    db.session.commit()

    # Serialize the created course data to JSON format
    course_data = CoursesSchema().dump(new_course)
    return make_response(jsonify(course_data), 201)

    
# delete course
@courses.route('/delete_course/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Courses.query.get_or_404(id)

    Lesson.query.filter_by(course_id=course.id).delete()

    db.session.delete(course)
    db.session.commit()

    return make_response(jsonify({"message": "Course deleted successfully"}), 200)
    