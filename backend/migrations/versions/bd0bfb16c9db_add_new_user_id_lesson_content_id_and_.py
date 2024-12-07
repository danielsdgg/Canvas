"""Add new user_id, lesson_content_id, and update relationships

Revision ID: bd0bfb16c9db
Revises: 81908b6bc977
Create Date: 2024-11-12 12:14:19.022770

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'bd0bfb16c9db'
down_revision = '81908b6bc977'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('assignments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('lesson_content_id', sa.Integer(), nullable=True))
        batch_op.alter_column('title',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
        batch_op.alter_column('assigned_at',
               existing_type=postgresql.TIMESTAMP(),
               type_=sa.Date(),
               nullable=False)
        batch_op.alter_column('due_date',
               existing_type=postgresql.TIMESTAMP(),
               type_=sa.Date(),
               nullable=False)
        batch_op.alter_column('course_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.drop_constraint('assignments_student_id_fkey', type_='foreignkey')
        batch_op.drop_constraint('assignments_lesson_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'lessons', ['lesson_id'], ['id'])
        batch_op.create_foreign_key(None, 'users', ['user_id'], ['id'])
        batch_op.create_foreign_key(None, 'lesson_contents', ['lesson_content_id'], ['id'])
        batch_op.drop_column('student_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('assignments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('student_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('assignments_lesson_id_fkey', 'lesson_contents', ['lesson_id'], ['id'])
        batch_op.create_foreign_key('assignments_student_id_fkey', 'users', ['student_id'], ['id'])
        batch_op.alter_column('course_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('due_date',
               existing_type=sa.Date(),
               type_=postgresql.TIMESTAMP(),
               nullable=True)
        batch_op.alter_column('assigned_at',
               existing_type=sa.Date(),
               type_=postgresql.TIMESTAMP(),
               nullable=True)
        batch_op.alter_column('title',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
        batch_op.drop_column('lesson_content_id')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
