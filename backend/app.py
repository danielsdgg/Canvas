from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/courses', methods=['POST'])
def add_tour():
    return 'course added'



if __name__ == '__main__':
    app.run(port=5000)
