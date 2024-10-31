from routes.courses import courses
from routes.lessons import lessons
from routes.weeks import weeks
from routes.assignments import assignments
from app import app

app.register_blueprint(courses)
app.register_blueprint(lessons)
app.register_blueprint(weeks)
app.register_blueprint(assignments)

if __name__ == '__main__':
    app.run(debug=True)