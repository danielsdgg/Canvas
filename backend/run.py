from app import app
from models import db, User
from routes.auth import auth_bp
from routes.protected import protected_bp
from flask_login import LoginManager
from flask_cors import CORS

db.init_app(app)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Register blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(protected_bp, url_prefix='/protected')

if __name__ == '__main__':
    app.run(debug=True)