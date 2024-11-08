from app import app
from routes.courses import courses
from routes.lessoncontents import lessons

app.register_blueprint(courses)
app.register_blueprint(lessons)

if __name__ == '__main__':
    app.run(debug=True)