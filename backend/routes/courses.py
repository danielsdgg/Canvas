from flask import jsonify, request, make_response, Blueprint
from models import Course, db, Lesson
from schemas import CourseSchema
from flask_cors import CORS

courses = Blueprint('courses', __name__)
CORS(courses)

# GET ALL COURSES
@courses.route('/courses', methods=['GET'])
def get_all_courses():
    course_list = Course.query.all()
    course_data = CourseSchema(many=True).dump(course_list)
    return make_response(jsonify(course_data), 200)

# GET ONE COURSE
@courses.route('/course/<int:id>', methods=['GET'])
def course_item(id):
    course = Course.query.filter_by(id=id).first()
    if not course:
        return make_response(jsonify({'message': 'Course not found'}), 404)
    serialized_course = CourseSchema().dump(course)
    return make_response(jsonify(serialized_course), 200)

# POST A COURSE WITH ITS MULTIPLE LESSONS
@courses.route('/course', methods=['POST'])
def create_course():
    data = request.get_json()
    lessons_data = data.pop('lessons', [])
    course_data = CourseSchema().load(data)

    new_course = Course(**course_data)
    db.session.add(new_course)
    db.session.flush()  # flush to get the new course id

    # add lessons
    for lesson_data in lessons_data:
        new_lesson = Lesson(course_id=new_course.id, **lesson_data)
        db.session.add(new_lesson)

    db.session.commit()  # commit after all lessons have been added
    course_data = CourseSchema().dump(new_course)
    return make_response(jsonify(course_data), 201)
    
# DELETE COURSE
@courses.route('/course/<int:id>', methods=['DELETE'])
def delete_course(id):
    course = Course.query.get_or_404(id)

    # delete lessons associated with course first
    Lesson.query.filter_by(course_id=course.id).delete()

    # delete the course
    db.session.delete(course)
    db.session.commit()

    return make_response(jsonify({"message": "Course deleted successfully"}), 200)
