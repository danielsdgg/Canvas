from app import app, db
from models import Course, Lesson
from schemas import CourseSchema

app.app_context().push()  # Push application context for database access

# Sample data for courses with lessons
sample_courses = [
    {
        "title": "Introduction to Programming",
        "description": "Learn the basics of programming.",
        "instructor": "Jane Smith",
        "term": "Fall 2024",
        "lessons": [
            {
                "title": "Lesson 1: Getting Started",
                "description": "Introduction to programming concepts.",
                "order": 1,
                "materials": "http://example.com/materials"
            },
            {
                "title": "Lesson 2: Control Structures",
                "description": "Understanding loops and conditionals.",
                "order": 2,
                "materials": "http://example.com/materials"
            }
        ]
    },
    {
        "title": "Web Development Basics",
        "description": "An introduction to web development.",
        "instructor": "John Doe",
        "term": "Spring 2025",
        "lessons": [
            {
                "title": "Lesson 1: HTML & CSS",
                "description": "Learn the structure and styling of web pages.",
                "order": 1,
                "materials": "http://example.com/materials"
            },
            {
                "title": "Lesson 2: JavaScript Basics",
                "description": "Introduction to client-side scripting.",
                "order": 2,
                "materials": "http://example.com/materials"
            }
        ]
    }
]

# Insert sample courses into the database
for course_data in sample_courses:
    # Extract lessons from course data
    lessons_data = course_data.pop('lessons', [])
    
    # Create Course instance
    new_course = Course(**course_data)
    
    # Add the new course to the session
    db.session.add(new_course)
    db.session.flush()  # Flush to get the course ID for lessons
    
    # Create and add each lesson
    for lesson_data in lessons_data:
        new_lesson = Lesson(course_id=new_course.id, **lesson_data)
        db.session.add(new_lesson)

# Commit the transaction
db.session.commit()

print("Sample data inserted successfully.")
