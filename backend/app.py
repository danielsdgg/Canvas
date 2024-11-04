from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from models import db
from routes.auth import auth_bp
from routes.courses import courses
from routes.users import users_bp
from routes.lessons import lessons
from routes.weeks import weeks
from routes.assignments import assignments

app = Flask(__name__)

# Configuration settings
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://lms_user:your_password_here@localhost/lms_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to a strong secret key

# Enable CORS for all domains (change this if you want to restrict it)
CORS(app, resources={r"/*": {"origins": "*"}})

# Initialize extensions
db.init_app(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(courses, url_prefix='/courses')
app.register_blueprint(users_bp, url_prefix='/admin')  # Optional: prefix for admin routes
app.register_blueprint(lessons)  # Register other blueprints here if needed
app.register_blueprint(weeks)     # Register other blueprints here if needed
app.register_blueprint(assignments)  # Register other blueprints here if needed

if __name__ == "__main__":
    app.run(debug=True)
