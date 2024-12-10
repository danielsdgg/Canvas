from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config  # Import the Config class from config.py
from models import db


app = Flask(__name__)

# Use the Config class for app configuration
app.config.from_object(Config)

# Initialize SQLAlchemy and Flask-Migrate
db = SQLAlchemy(app)
migrate = Migrate(app, db)

