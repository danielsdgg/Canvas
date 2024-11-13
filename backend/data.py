from app import db
from models import Course, Lesson, LessonContent, Assignment

def clear_data():
    try:
        # Delete from the child tables first to avoid foreign key constraint errors
        db.session.query(Assignment).delete()
        db.session.query(LessonContent).delete()
        db.session.query(Lesson).delete()
        
        # Now delete from the parent table (courses)
        db.session.query(Course).delete()

        # Commit the transaction
        db.session.commit()
        
        print("Data cleared successfully.")
    except Exception as e:
        db.session.rollback()  # In case of any error, rollback the transaction
        print(f"Error while clearing data: {e}")

# Call the function
clear_data()
