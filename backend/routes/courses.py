from flask import jsonify, request, make_response, Blueprint, abort
from models import Course, db, Lesson, LessonContent, Assignment
from schemas import CourseSchema
from flask_cors import CORS
from marshmallow import ValidationError


courses = Blueprint('courses', __name__)
CORS(courses)

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
                'day_number': content.day_number,
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
            # Get the day_number from the incoming data
            day_number = content_data.get('day_number')  

            lesson_content = LessonContent(
                week_number=content_data.get('week_number'),
                day_number=day_number, 
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

# EDIT COURSE
@courses.route('/courses/<int:course_id>', methods=['PUT'])
def update_course(course_id):
    course = Course.query.get(course_id)
    if not course:
        return jsonify({"error": "Course not found"}), 404

    data = request.get_json()

    # Update course fields if provided in the request body
    if 'title' in data:
        course.title = data['title']
    if 'description' in data:
        course.description = data['description']

    # Update lessons, lesson contents, and assignments
    if 'lessons' in data:
        for lesson_data in data['lessons']:
            lesson_id = lesson_data.get('id')
            if lesson_id:
                lesson = Lesson.query.get(lesson_id)
                if lesson:
                    if 'title' in lesson_data:
                        lesson.title = lesson_data['title']
                    if 'description' in lesson_data:
                        lesson.description = lesson_data['description']
                    if 'order' in lesson_data:
                        lesson.order = lesson_data['order']
                    
                    # Update lesson contents
                    if 'lesson_contents' in lesson_data:
                        for content_data in lesson_data['lesson_contents']:
                            content_id = content_data.get('id')
                            if content_id:
                                content = LessonContent.query.get(content_id)
                                if content:
                                    if 'week_number' in content_data:
                                        content.week_number = content_data['week_number']
                                    if 'day_number' in content_data:
                                        content.day_number = content_data['day_number']
                                    if 'content_type' in content_data:
                                        content.content_type = content_data['content_type']
                                    if 'content' in content_data:
                                        content.content = content_data['content']
                                    if 'week_start' in content_data:
                                        content.week_start = content_data['week_start']
                                    if 'week_end' in content_data:
                                        content.week_end = content_data['week_end']
                    
                    # Update assignments
                    if 'assignments' in lesson_data:
                        for assignment_data in lesson_data['assignments']:
                            assignment_id = assignment_data.get('id')
                            if assignment_id:
                                assignment = Assignment.query.get(assignment_id)
                                if assignment:
                                    if 'title' in assignment_data:
                                        assignment.title = assignment_data['title']
                                    if 'description' in assignment_data:
                                        assignment.description = assignment_data['description']
                                    if 'assigned_at' in assignment_data:
                                        assignment.assigned_at = assignment_data['assigned_at']
                                    if 'due_date' in assignment_data:
                                        assignment.due_date = assignment_data['due_date']

    try:
        db.session.commit()
        return jsonify({"message": "Course updated successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
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
    


# GET LESSON CONTENTS FOR A SPECIFIC LESSON IN A COURSE
@courses.route('/courses/<int:course_id>/lessons/<int:lesson_id>/contents', methods=['GET'])
def get_lesson_contents(course_id, lesson_id):
    # Fetch the course by ID
    course = Course.query.get(course_id)
    if not course:
        return jsonify({"error": "Course not found"}), 404

    # Fetch the lesson by ID for the given course
    lesson = Lesson.query.filter_by(course_id=course_id, id=lesson_id).first()
    if not lesson:
        return jsonify({"error": "Lesson not found"}), 404

    # Fetch the lesson contents for the specific lesson
    lesson_contents = LessonContent.query.filter_by(lesson_id=lesson.id).all()

    if not lesson_contents:
        return jsonify({"message": "No contents found for this lesson"}), 404

    # Return the lesson contents in the desired structure
    contents_data = [{
        'id': content.id,
        'week_number': content.week_number,
        'day_number': content.day_number,
        'content_type': content.content_type,
        'content': content.content,
        'week_start': content.week_start,
        'week_end': content.week_end,
    } for content in lesson_contents]

    return jsonify(contents_data)


