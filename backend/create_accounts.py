from app import app
from models import User, db

def create_users():
    with app.app_context():
        # Create Superadmin account
        superadmin = User(
            username='daniel',
            email='gathigidg26@gmail.com.com',
            role='Superadmin'
        )
        superadmin.set_password('superadmin123')  # Hash the password

        # Create Admin account
        admin = User(
            username='morgan',
            email='morgantechnical72@gmail.com',
            role='Admin'
        )
        admin.set_password('admin123')  # Hash the password

        # Add to the database
        db.session.add(superadmin)
        db.session.add(admin)
        db.session.commit()

        print("Superadmin and Admin accounts created successfully!")

if __name__ == "__main__":
    create_users()