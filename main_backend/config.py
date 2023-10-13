import os

#base class 
class Config:
    SQLACHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass


# subclasses of the base class
class DevelopmentConfig(Config):
    DEBUG = True
    JWT_SECRET_KEY = 'jwt'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:''@localhost/a_vendor_app'

class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("TEST_DATABASE_URI")

# configuration object
config = {
    'development' : DevelopmentConfig,
    'testing' : TestingConfig,
    'default' : DevelopmentConfig
}