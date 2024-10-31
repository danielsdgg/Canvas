from flask import jsonify, make_response, Blueprint
from models import  Lesson
from schemas import LessonSchema
from flask_cors import CORS

lessons = Blueprint('lessons', __name__)
CORS(lessons)


# get all lessons
@lessons.route('/lessons', methods=['GET'])
def get_all_lessons():
    lesson_list = Lesson.query.all()
    lesson_data = LessonSchema(many = True).dump(lesson_list)
    return make_response(jsonify(lesson_data), 200)

# get one lesson with weekly content and assignments
@lessons.route('/lessons/<int:lesson_id>', methods=['GET'])
def get_lesson_details(lesson_id):
    lesson = Lesson.query.get(lesson_id)

    if not lesson:
        return jsonify({"message": "Lesson not found"}), 404

    # Construct the response data
    lesson_data = {
        "id": lesson.id,
        "title": lesson.title,
        "description": lesson.description,
        "materials": lesson.materials,
        "weekly_contents": []  # Add this key for weekly content
    }

    # Get weekly content for the lesson
    weekly_contents = lesson.weekly_contents

    for week in weekly_contents:
        week_data = {
            "week_number": week.week_number,
            "content": week.content,
            "assignments": []
        }

        # Get assignments for the week
        assignments = week.assignments

        for assignment in assignments:
            assignment_data = {
                "assignment_id": assignment.id,
                "title": assignment.title,
                "description": assignment.description,
                "due_date": assignment.due_date.isoformat()  # Convert to ISO format for JSON
            }
            week_data["assignments"].append(assignment_data)

        lesson_data["weekly_contents"].append(week_data)

    return jsonify(lesson_data), 200




