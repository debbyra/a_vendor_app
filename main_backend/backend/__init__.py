from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from backend.db import db


def create_app(config_name): #Application Factory Funciton
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.from_pyfile("../config.py")


    db.init_app(app)


    #import the blueprints
    from backend.users.controller import all_users
    from backend.settings.controller import all_settings
    from backend.reviews.controller import all_reviews
    from backend.products.controller import all_products
    from backend.orders.controller import all_orders
    from backend.notifications.controller import all_notifications
    from backend.categories.controller import all_categories
    from backend.locations.controller import all_locations
    from backend.carts.controller import all_carts
    from backend.businesses.controller import all_businesses
    from backend.auth.controller import auth
    from backend.analytics.controller import all_analytics


    # #registering blue prints
    app.register_blueprint(all_users)
    app.register_blueprint(all_carts)
    app.register_blueprint(all_analytics)
    app.register_blueprint(all_locations)
    app.register_blueprint(all_businesses)
    app.register_blueprint(all_reviews)
    app.register_blueprint(all_orders)
    app.register_blueprint(all_products)
    app.register_blueprint(all_notifications)
    app.register_blueprint(all_categories)
    app.register_blueprint(auth)
    app.register_blueprint(all_settings)


    return app
