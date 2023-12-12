from backend import create_app, db
from flask_migrate import Migrate
from backend.locations.model import Location
from backend.users.model import User
from backend.analytics.model import Analysis
from backend.businesses.model import Business
from backend.carts.model import Cart
from backend.categories.model import Category
from backend.notifications.model import Notification
from backend.orders.model import Order
from backend.products.model import Product
from backend.reviews.model import Review
from backend.business_categories.model import BusinessCategory
from backend.settings.model import Setting
from flask_jwt_extended import JWTManager

app = create_app('development')
migrate = Migrate(app, db)
jwt = JWTManager(app)

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User = User, Location=Location, Analysis=Analysis, Business=Business, Cart=Cart, Category=Category, Notification=Notification, Order=Order, Product=Product, Review=Review, Setting=Setting, BusinessCategory=BusinessCategory) 