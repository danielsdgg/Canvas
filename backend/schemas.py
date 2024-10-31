from marshmallow import Schema, fields

class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String(required=True)
    email = fields.String(required=True)
    password = fields.String(load_only=True)  # Exclude from serialization, only used when loading data
    role = fields.String()

    class Meta:
        ordered = True

class AssignmentSchema(Schema):
    id = fields.Integer()
    week_id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    due_date = fields.DateTime(required=True)

    class Meta:
        ordered = True

class WeekSchema(Schema):
    id = fields.Integer()
    lesson_id = fields.Integer()
    week_number = fields.Integer(required=True)
    content = fields.String(required=True)
    assignments = fields.Nested(AssignmentSchema, many=True)  # Nested assignments within week

    class Meta:
        ordered = True

class LessonSchema(Schema):
    id = fields.Integer()
    course_id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    order = fields.Integer()
    materials = fields.String()
    weeks = fields.Nested(WeekSchema, many=True)  # Nested weeks within lesson

    class Meta:
        ordered = True

class CourseSchema(Schema):
    id = fields.Integer()
    title = fields.String(required=True)
    description = fields.String()
    instructor = fields.String()
    term = fields.String()
    lessons = fields.Nested(LessonSchema, many=True)  # Nested lessons within course

    class Meta:
        ordered = True
