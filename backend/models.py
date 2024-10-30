from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String())
    email = db.Column(db.String())
    password = db.Column(db.String())
    role = db.Column(db.String())

class Courses(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    description = db.Column(db.String())
    instructor = db.Column(db.String())
    term = db.Column(db.String())

    lessons = db.relationship("Lesson", backref="courses")


class Lesson(db.Model):
    __tablename__ = 'lessons'

    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))  # Foreign key linking lesson to course
    title = db.Column(db.String())  # Title of the lesson (e.g., "HTML Basics")
    description = db.Column(db.String())  # Brief description of the lesson
    order = db.Column(db.Integer())  # Order in which the lesson appears in the course

    # Optional fields for additional information
    materials = db.Column(db.Text())  # Links or references to lesson materials/resources


    