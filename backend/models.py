from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from flask_bcrypt import bcrypt

db = SQLAlchemy()

class User(db.Model, UserMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))
    email = db.Column(db.String(100))
    password_hash = db.Column(db.String(128))
    role = db.Column(db.String(20))  # Admin, Instructor, Student
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    enrollments = db.relationship('Enrollment', back_populates='user', cascade="all, delete")
    assignments = db.relationship('Assignment', back_populates='user')  # Updated to use `back_populates`
    
    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.username}>'

class Course(db.Model):
    __tablename__ = 'courses'
    
    id = db.Column(db.Integer, primary_key=True)
    instructor_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # Instructor (User)
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    lessons = db.relationship('Lesson', backref='course', lazy=True)
    enrollments = db.relationship('Enrollment', back_populates='course', cascade="all, delete")
    assignments = db.relationship('Assignment', back_populates='course', lazy=True)
    instructor = db.relationship('User', backref='courses')
    
    def __repr__(self):
        return f'<Course {self.title}>'

class Lesson(db.Model):
    __tablename__ = 'lessons'
    
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    title = db.Column(db.String(100))
    description = db.Column(db.Text())
    # order = db.Column(db.Integer)  # Order of the lesson in the course
    
    # Relationships
    lesson_contents = db.relationship('LessonContent', back_populates='lesson', cascade="all, delete")
    assignments = db.relationship('Assignment', back_populates='lesson', cascade="all, delete")  

    
    def __repr__(self):
        return f'<Lesson {self.title}>'

class LessonContent(db.Model):
    __tablename__ = 'lesson_contents'
    
    id = db.Column(db.Integer, primary_key=True)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'))
    week_number = db.Column(db.Integer())
    day_number = db.Column(db.Integer())
    content_type = db.Column(db.String())  # e.g., "Video", "Reading", "Exercise"
    content1 = db.Column(db.Text()) # Content text or file URL
    content2 = db.Column(db.Text()) # Content text or file URL
    content3 = db.Column(db.Text()) # Content text or file URL
    content4 = db.Column(db.Text()) # Content text or file URL
    content5 = db.Column(db.Text()) # Content text or file URL
    content6 = db.Column(db.Text()) # Content text or file URL
    
    # Relationships
    lesson = db.relationship('Lesson', back_populates='lesson_contents')
    assignments = db.relationship('Assignment', backref='lesson_content_rel', lazy=True)
    
    def __repr__(self):
        return f'<LessonContent {self.content_type}>'

class Enrollment(db.Model):
    __tablename__ = 'enrollments'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))
    enrolled_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    user = db.relationship('User', back_populates='enrollments')
    course = db.relationship('Course', back_populates='enrollments')
    
    def __repr__(self):
        return f'<Enrollment User: {self.user_id} Course: {self.course_id}>'

class Assignment(db.Model):
    __tablename__ = 'assignments'
    id = db.Column(db.Integer, primary_key=True) 
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    week_number = db.Column(db.Integer, nullable=False, default=1) 
    assigned_at = db.Column(db.Date, nullable=False)
    due_date = db.Column(db.Date, nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    lesson_id = db.Column(db.Integer, db.ForeignKey('lessons.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    lesson_content_id = db.Column(db.Integer, db.ForeignKey('lesson_contents.id'))


    # Relationships
    course = db.relationship('Course', back_populates='assignments')
    user = db.relationship('User', back_populates='assignments') 
    lesson = db.relationship('Lesson', back_populates='assignments')  # Relationship with Lesson
    lesson_content = db.relationship('LessonContent', back_populates='assignments')

    def __repr__(self):
        return f'<Assignment {self.title}>' 

class Grade(db.Model):
    __tablename__ = 'grades'
    
    id = db.Column(db.Integer, primary_key=True)
    assignment_id = db.Column(db.Integer, db.ForeignKey('assignments.id'))
    student_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    grade = db.Column(db.Float)
    graded_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    assignment = db.relationship('Assignment')
    student = db.relationship('User')
    
    def __repr__(self):
        return f'<Grade {self.grade} for Assignment: {self.assignment_id} Student: {self.student_id}>'
