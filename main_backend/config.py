import os
from dotenv import load_dotenv


load_dotenv()

#base class 
class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass


# subclasses of the base class
class DevelopmentConfig(Config):
    DEBUG = True
    JWT_SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'C:/sqlite/test.db'

# configuration object
config = {
    'development' : DevelopmentConfig,
    'testing' : TestingConfig,
    'default' : DevelopmentConfig
}