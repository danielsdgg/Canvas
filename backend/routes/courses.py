from flask import jsonify, request, make_response, Blueprint
from models import Course, db, Lesson, LessonContent, Assignment
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
@courses.route('/course/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)
    if not course:
        return make_response(jsonify({'message': 'Course not found'}), 404)

    # Fetch lessons along with lesson contents and assignments
    lessons = []
    for lesson in course.lessons:
        lesson_data = {
            'id': lesson.id,
            'title': lesson.title,
            'description': lesson.description,
            'order': lesson.order,
            'lesson_contents': [{'id': content.id, 'content': content.content} for content in lesson.lesson_contents],
            'assignments': [{'id': assignment.id, 'title': assignment.title, 'due_date': assignment.due_date} for assignment in lesson.assignments]
        }
        lessons.append(lesson_data)
    
    course_data = {
        'id': course.id,
        'title': course.title,
        'description': course.description,
        'lessons': lessons
    }
    
    return jsonify(course_data)


# POST A COURSE WITH ITS MULTIPLE LESSONS
@courses.route('/course', methods=['POST'])
def create_course():
    data = request.get_json()
    lessons_data = data.pop('lessons', [])
    
    # Deserialize course data
    course_data = CourseSchema().load(data)
    new_course = Course(**course_data)
    db.session.add(new_course)
    db.session.flush()  # Flush to get the new course id

    # Add lessons and their nested contents and assignments
    for lesson_data in lessons_data:
        lesson_contents_data = lesson_data.pop('lesson_contents', [])
        assignments_data = lesson_data.pop('assignments', [])
        
        # Create lesson and flush to get lesson_id
        new_lesson = Lesson(course_id=new_course.id, **lesson_data)
        db.session.add(new_lesson)
        db.session.flush()  # Now lesson_id is available

        # Add lesson contents
        for content_data in lesson_contents_data:
            new_content = LessonContent(lesson_id=new_lesson.id, **content_data)
            db.session.add(new_content)

        # Add assignments using the flushed lesson_id
        for assignment_data in assignments_data:
            new_assignment = Assignment(course_id=new_course.id, lesson_id=new_lesson.id, **assignment_data)
            db.session.add(new_assignment)

    db.session.commit()  # Commit all data

    course_data = CourseSchema().dump(new_course)
    return make_response(jsonify(course_data), 201)

    
# DELETE COURSE
@courses.route('/course/<int:course_id>', methods=['DELETE'])
def delete_course(course_id):
    # Fetch the course by ID
    course = Course.query.get(course_id)
    if not course:
        return make_response(jsonify({'message': 'Course not found'}), 404)

    try:
        # Delete all the assignments for this course
        for lesson in course.lessons:
            for assignment in lesson.assignments:
                db.session.delete(assignment)
        
        # Delete all the lesson contents for this course
        for lesson in course.lessons:
            for content in lesson.lesson_contents:
                db.session.delete(content)

        # Delete all the lessons for this course
        for lesson in course.lessons:
            db.session.delete(lesson)

        # Finally, delete the course
        db.session.delete(course)

        # Commit the changes
        db.session.commit()

        return make_response(jsonify({'message': 'Course and all related data deleted successfully'}), 200)
    
    except Exception as e:
        # In case of any error, rollback the session and return an error message
        db.session.rollback()
        return make_response(jsonify({'message': str(e)}), 500)
