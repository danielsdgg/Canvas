from marshmallow import Schema, fields, EXCLUDE

class UserSchema(Schema):
    id = fields.Integer(dump_only=True)
    username = fields.String(required=True)
    email = fields.Email(required=True)
    password_hash = fields.String(load_only=True)
    role = fields.String()
    created_at = fields.Date(dump_only=True, format="%Y-%m-%d")

class AssignmentSchema(Schema):
    id = fields.Integer(dump_only=True)
    title = fields.String(required=True)
    description = fields.String()
    week_number = fields.Integer()
    assigned_at = fields.Date(required=True, format="%Y-%m-%d")
    due_date = fields.Date(required=True, format="%Y-%m-%d")


class EnrollmentSchema(Schema):
    id = fields.Integer(dump_only=True)
    user_id = fields.Integer()
    course_id = fields.Integer()
    enrolled_at = fields.Date(dump_only=True, format="%Y-%m-%d")

class GradeSchema(Schema):
    id = fields.Integer(dump_only=True)
    assignment_id = fields.Integer()
    student_id = fields.Integer()
    grade = fields.Float(validate=lambda x: 0 <= x <= 100)
    graded_at = fields.Date(dump_only=True, format="%Y-%m-%d")

