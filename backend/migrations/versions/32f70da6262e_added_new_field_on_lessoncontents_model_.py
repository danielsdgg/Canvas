"""Added new field on lessoncontents model called daynumber

Revision ID: 32f70da6262e
Revises: bd0bfb16c9db
Create Date: 2024-11-14 14:37:42.413062

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '32f70da6262e'
down_revision = 'bd0bfb16c9db'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.add_column(sa.Column('day_number', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.drop_column('day_number')

    # ### end Alembic commands ###