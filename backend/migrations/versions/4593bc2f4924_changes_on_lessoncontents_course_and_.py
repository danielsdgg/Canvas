"""changes on lessoncontents course and assignment models

Revision ID: 4593bc2f4924
Revises: 32f70da6262e
Create Date: 2024-11-15 12:35:45.525054

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy import inspect

# revision identifiers, used by Alembic.
revision = '4593bc2f4924'
down_revision = '32f70da6262e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    
    # Check if the 'week_number' column already exists in the 'assignments' table
    bind = op.get_bind()
    inspector = inspect(bind)
    columns = [column['name'] for column in inspector.get_columns('assignments')]
    
    if 'week_number' not in columns:
        with op.batch_alter_table('assignments', schema=None) as batch_op:
            batch_op.add_column(sa.Column('week_number', sa.Integer(), nullable=False))

    # Drop the old columns 'week_start' and 'week_end' from 'lesson_contents' table
    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.drop_column('week_end')
        batch_op.drop_column('week_start')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    
    # Restore the old columns 'week_start' and 'week_end' in 'lesson_contents'
    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.add_column(sa.Column('week_start', sa.DATE(), nullable=True))
        batch_op.add_column(sa.Column('week_end', sa.DATE(), nullable=True))

    # Drop the 'week_number' column from 'assignments' table
    with op.batch_alter_table('assignments', schema=None) as batch_op:
        batch_op.drop_column('week_number')

    # ### end Alembic commands ###

