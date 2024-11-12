import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_random_secret_key'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:myAccount26!@localhost/lms'
    
    # Database connection pool settings
    SQLALCHEMY_POOL_SIZE = 10        # Increase the pool size to 10
    SQLALCHEMY_MAX_OVERFLOW = 20     # Allow up to 20 connections beyond the pool size
    SQLALCHEMY_POOL_TIMEOUT = 30     # Wait up to 30 seconds for a connection before timing out
