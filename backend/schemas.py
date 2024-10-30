from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String()
    email = fields.String()
    password = fields.String()
    role = fields.String()

class CoursesSchema(Schema):
    id = fields.Integer()
    title = fields.String()
    description = fields.String()
    instructor = fields.String()
    term = fields.String()

class LessonSchema(Schema):
    id = fields.Integer()
    course_id = fields.Integer()
    title = fields.String()
    description = fields.String()
    order = fields.Integer()
    materials = fields.String()
