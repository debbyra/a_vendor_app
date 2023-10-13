from backend import create_app, db
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from backend.users.model import User
from flask_jwt_extended import JWTManager
# from flask_bcrypt import Bcrypt


app = create_app('development')
migrate = Migrate(app, db)
jwt = JWTManager(app)
# bcrypt = Bcrypt(app)

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User = User) 