from flask import jsonify, request, make_response, Blueprint, abort
from models import Course, db, Lesson, LessonContent, Assignment, Detail
from schemas import CourseSchema
from flask_cors import CORS
from marshmallow import ValidationError
from sqlalchemy.exc import SQLAlchemyError


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
                'content1': content.content1,
                'content2': content.content2,
                'content3': content.content3,
                'content4': content.content4,
                'content5': content.content5,
                'content6': content.content6,
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
@courses.route('/create_course', methods=['POST'])
def create_course():
    try:
        data = request.get_json()

        # Create a new Course
        course = Course(
            title=data['title'],
            description=data['description'],
            instructor_id=data['instructor_id']
        )
        db.session.add(course)
        db.session.commit()  # Commit to get the course's ID

        # Create Lessons, LessonContents, Details, and Assignments
        for lesson_data in data['lessons']:
            lesson = Lesson(
                title=lesson_data['title'],
                description=lesson_data['description'],
                course_id=course.id  # Link lesson to course
            )
            db.session.add(lesson)
            db.session.commit()

            # Create Lesson Contents
            for content_data in lesson_data['lesson_contents']:
                lesson_content = LessonContent(
                    content_type=content_data['content_type'],
                    content1=content_data.get('content1'),
                    content2=content_data.get('content2'),
                    content3=content_data.get('content3'),
                    lesson_id=lesson.id  # Link content to lesson
                )
                db.session.add(lesson_content)
                db.session.commit()

                # Create Detail for each Lesson Content
                if 'detail' in content_data:
                    detail = Detail(
                        lesson_content_id=lesson_content.id,
                        title=content_data['detail']['title'],
                        paragraph1=content_data['detail'].get('paragraph1'),
                        paragraph2=content_data['detail'].get('paragraph2'),
                        heading1=content_data['detail'].get('heading1'),
                        sentence1=content_data['detail'].get('sentence1')
                    )
                    db.session.add(detail)
            
            db.session.commit()  # Commit after all lesson content and details

        # Create Assignments
        for assignment_data in data['assignments']:
            assignment = Assignment(
                title=assignment_data['title'],
                description=assignment_data['description'],
                assigned_at=assignment_data['assigned_at'],
                due_date=assignment_data['due_date'],
                week_number=assignment_data['week_number'],
                course_id=course.id  # Link assignment to course
            )
            db.session.add(assignment)

        db.session.commit()  # Final commit to save everything

        return jsonify({"message": "Course created successfully"}), 201

    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

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
    

# Route to fetch lesson contents and assignments
from sqlalchemy.orm import joinedload

@courses.route('/courses/<int:course_id>/lessons/<int:lesson_id>/contents', methods=['GET'])
def get_lesson_contents(course_id, lesson_id):
    try:
        # Fetch lesson with related contents, details, and assignments
        lesson = Lesson.query.filter_by(id=lesson_id, course_id=course_id)\
            .options(joinedload(Lesson.lesson_contents).joinedload(LessonContent.detail),
                     joinedload(Lesson.lesson_contents).joinedload(LessonContent.assignments))\
            .first()

        if not lesson:
            return jsonify({"message": "Lesson not found"}), 404

        # Build response data
        lesson_contents = []
        for content in lesson.lesson_contents:
            content_data = {
                'id': content.id,
                'week_number': content.week_number,
                'day_number': content.day_number,
                'content_type': content.content_type,
                'content1': content.content1,
                'content2': content.content2,
                'content3': content.content3,
                'content4': content.content4,
                'content5': content.content5,
                'content6': content.content6,
                'detail': {
                    'id': content.detail.id,
                    'title': content.detail.title,
                    'paragraph1': content.detail.paragraph1,
                    'paragraph2': content.detail.paragraph2,
                    'heading1': content.detail.heading1,
                    'sentence1': content.detail.sentence1
                } if content.detail else None,
                'assignments': [
                    {
                        'id': assignment.id,
                        'title': assignment.title,
                        'description': assignment.description,
                        'assigned_at': assignment.assigned_at,
                        'due_date': assignment.due_date
                    } for assignment in content.assignments
                ]
            }
            lesson_contents.append(content_data)

        return jsonify(lesson_contents), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500

    
@courses.route('/lessons/<int:lesson_id>/contents/day/<int:day_number>', methods=['GET'])
def get_content_by_day(lesson_id, day_number):
    content = LessonContent.query.filter_by(lesson_id=lesson_id, day_number=day_number).first()
    if not content:
        return jsonify({"error": "Content not found"}), 404
    return jsonify({
        "id": content.id,
        "week_number": content.week_number,
        "day_number": content.day_number,
        "content_type": content.content_type,
        "content1": content.content1,
        "content2": content.content2,
        "content3": content.content3,
        "content4": content.content4,
        "content5": content.content5,
        "content6": content.content6
    }), 200

@courses.route('/courses/<int:course_id>/lessons/<int:lesson_id>/contents/<int:day_number>', methods=['GET'])
def get_day_contents(course_id, lesson_id, day_number):
    try:
        lesson = Lesson.query.filter_by(course_id=course_id, id=lesson_id).first_or_404()
        day_contents = LessonContent.query.filter_by(lesson_id=lesson.id, day_number=day_number).all()

        if not day_contents:
            return jsonify({"message": "No content found for this day."}), 404

        # Serialize the contents
        serialized_contents = [
            {
                "id": content.id,
                "week_number": content.week_number,
                "day_number": content.day_number,
                "content_type": content.content_type,
                "content1": content.content1,
                "content2": content.content2,
                "content3": content.content3,
                "content4": content.content4,
                "content5": content.content5,
                "content6": content.content6
            } for content in day_contents
        ]
        return jsonify(serialized_contents), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500





