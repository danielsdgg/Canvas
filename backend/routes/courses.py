from flask import jsonify, request, make_response, Blueprint, abort
from models import Course, db, Lesson, LessonContent, Assignment
from schemas import CourseSchema
from flask_cors import CORS
from marshmallow import ValidationError


courses = Blueprint('courses', __name__)
CORS(courses)

courses_schema = CourseSchema(many=True)


# GET ALL COURSES
@courses.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([{
        'id': course.id,
        'title': course.title,
        'description': course.description,
    } for course in courses])

# GET ONE COURSE
@courses.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get(course_id)
    if not course:
        return jsonify({'error': 'Course not found'}), 404

    # Convert the course and its nested details into a JSON structure
    course_data = {
        'id': course.id,
        'title': course.title,
        'description': course.description,
        'lessons': []
    }

    # Loop through lessons
    for lesson in course.lessons:
        lesson_data = {
            'id': lesson.id,
            'title': lesson.title,
            'description': lesson.description,
            'order': lesson.order,
            'lesson_contents': [],
            'assignments': []
        }

        # Loop through lesson contents
        for content in lesson.lesson_contents:
            lesson_data['lesson_contents'].append({
                'id': content.id,
                'week_number': content.week_number,
                'content_type': content.content_type,
                'content': content.content,
                'week_start': content.week_start,
                'week_end': content.week_end,
            })

        # Loop through assignments
        for assignment in lesson.assignments:
            lesson_data['assignments'].append({
                'id': assignment.id,
                'title': assignment.title,
                'description': assignment.description,
                'assigned_at': assignment.assigned_at,
                'due_date': assignment.due_date,
            })

        course_data['lessons'].append(lesson_data)

    return jsonify(course_data)

# POST A COURSE WITH ITS MULTIPLE LESSONS
@courses.route('/course', methods=['POST'])
def create_course():
    # Parse and validate the incoming JSON data
    course_data = request.get_json()
    schema = CourseSchema()

    try:
        # Validate and deserialize input data to Course model-compatible dictionary
        validated_data = schema.load(course_data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    # Create a new Course instance
    course = Course(
        title=validated_data['title'],
        description=validated_data['description'],
        instructor_id=validated_data.get('instructor_id')
    )

    # Process lessons, if any
    for lesson_data in validated_data.get('lessons', []):
        lesson = Lesson(
            title=lesson_data['title'],
            description=lesson_data['description'],
            order=lesson_data.get('order'),
            course=course
        )
        
        # Process lesson contents, if any
        for content_data in lesson_data.get('lesson_contents', []):
            lesson_content = LessonContent(
                week_number=content_data.get('week_number'),
                content_type=content_data.get('content_type'),
                content=content_data.get('content'),
                week_start=content_data.get('week_start'),
                week_end=content_data.get('week_end'),
                lesson=lesson
            )
            lesson.lesson_contents.append(lesson_content)
        
        # Process assignments, if any
        for assignment_data in lesson_data.get('assignments', []):
            assignment = Assignment(
                title=assignment_data['title'],
                description=assignment_data.get('description'),
                assigned_at=assignment_data['assigned_at'],
                due_date=assignment_data['due_date'],
                lesson=lesson,
                course=course
            )
            lesson.assignments.append(assignment)
        
        course.lessons.append(lesson)

    # Add the course to the database
    db.session.add(course)
    db.session.commit()

    # Serialize and return the created course data
    return jsonify(schema.dump(course)), 201
    
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
