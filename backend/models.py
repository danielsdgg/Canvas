from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
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
    

class Enrollment(db.Model):
    __tablename__ = 'enrollments'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    enrolled_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    user = db.relationship('User', back_populates='enrollments')
    
    def __repr__(self):
        return f'<Enrollment User: {self.user_id}>'

class Assignment(db.Model):
    __tablename__ = 'assignments'
    id = db.Column(db.Integer, primary_key=True) 
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    week_number = db.Column(db.Integer, nullable=False, default=1) 
    assigned_at = db.Column(db.Date, nullable=False)
    due_date = db.Column(db.Date, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)


    # Relationships
    user = db.relationship('User', back_populates='assignments') 

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
