"""Added more on lessoncontents model and removed order from lessons

Revision ID: 0dc3f130fa0e
Revises: 4593bc2f4924
Create Date: 2024-11-18 11:41:38.767040

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0dc3f130fa0e'
down_revision = '4593bc2f4924'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.add_column(sa.Column('content1', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('content2', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('content3', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('content4', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('content5', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('content6', sa.Text(), nullable=True))
        batch_op.drop_column('content')

    with op.batch_alter_table('lessons', schema=None) as batch_op:
        batch_op.drop_column('order')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lessons', schema=None) as batch_op:
        batch_op.add_column(sa.Column('order', sa.INTEGER(), autoincrement=False, nullable=True))

    with op.batch_alter_table('lesson_contents', schema=None) as batch_op:
        batch_op.add_column(sa.Column('content', sa.TEXT(), autoincrement=False, nullable=True))
        batch_op.drop_column('content6')
        batch_op.drop_column('content5')
        batch_op.drop_column('content4')
        batch_op.drop_column('content3')
        batch_op.drop_column('content2')
        batch_op.drop_column('content1')

    # ### end Alembic commands ###
