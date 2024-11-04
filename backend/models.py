from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    role = db.Column(db.String(50), nullable=False)  # e.g., 'superuser', 'admin', 'student'

    # Relationship to associate students with courses
    courses = db.relationship('Course', backref='student', lazy=True)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Course(db.Model):  
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    description = db.Column(db.String())
    instructor_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Assuming instructor is a User
    term = db.Column(db.String())

    lessons = db.relationship("Lesson", backref="course", cascade="all, delete-orphan")

class Lesson(db.Model):
    __tablename__ = 'lessons'

    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)  
    title = db.Column(db.String(), nullable=False)  
    description = db.Column(db.String())  
    order = db.Column(db.Integer())  # Order in which the lesson appears in the course
    materials = db.Column(db.Text())  # Links or references to lesson materials/resources

    # relationship
    weeks = db.relationship('Week', backref='lesson', cascade="all, delete-orphan", lazy=True)

class Week(db.Model):
    __tablename__ = 'weeks'

    id = db.Column(db.Integer, primary_key=True)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)
    week_number = db.Column(db.Integer, nullable=False)
    content = db.Column(db.Text, nullable=False)

    assignments = db.relationship('Assignment', backref='week', cascade="all, delete-orphan", lazy=True)

class Assignment(db.Model):
    __tablename__ = 'assignments'

    id = db.Column(db.Integer, primary_key=True)
    week_id = db.Column(db.Integer, db.ForeignKey('weeks.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    due_date = db.Column(db.DateTime, nullable=False)
