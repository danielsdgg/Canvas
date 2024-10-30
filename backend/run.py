from routes.courses import courses
from app import app

app.register_blueprint(courses)

if __name__ == '__main__':
    app.run(debug=True)