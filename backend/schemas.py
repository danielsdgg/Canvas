from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer(dump_only=True)
    username = fields.String(required=True)
    email = fields.Email(required=True)
    password_hash = fields.String(load_only=True)
    role = fields.String()
    created_at = fields.Date(dump_only=True, format="%Y-%m-%d")

class LessonSchema(Schema):
    id = fields.Integer(dump_only=True)
    course_id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    order = fields.Integer()

class CourseSchema(Schema):
    id = fields.Integer(dump_only=True)
    instructor_id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    created_at = fields.Date(dump_only=True, format="%Y-%m-%d")

    lessons = fields.Nested(LessonSchema,many=True)

class AssignmentSchema(Schema):
    id = fields.Integer(dump_only=True)
    course_id = fields.Integer(required=True)
    student_id = fields.Integer(required=True)
    title = fields.String(required=True)
    description = fields.String()
    assigned_at = fields.Date(required=True, format="%Y-%m-%d")
    due_date = fields.Date(required=True, format="%Y-%m-%d")

class LessonContentSchema(Schema):
    id = fields.Integer(dump_only=True)
    lesson_id = fields.Integer()
    week_number = fields.Integer()
    content_type = fields.String()
    content = fields.String()
    week_start = fields.Date(format="%Y-%m-%d")
    week_end = fields.Date(format="%Y-%m-%d")

    assignments = fields.Nested(AssignmentSchema, many=True)

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

