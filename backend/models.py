from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    role = db.Column(db.String(), default='student')  # Assuming a default role

class Course(db.Model):  
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=False)
    description = db.Column(db.String())
    instructor = db.Column(db.String())
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
