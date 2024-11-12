from app import app
from routes.courses import courses

app.register_blueprint(courses)

if __name__ == '__main__':
    app.run(debug=True)