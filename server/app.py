from flask import Flask
from pymongo import MongoClient
from dotenv import load_dotenv
import os
from flask_cors import CORS
from utils.data import base_api_url
from routes.users import users_bp

load_dotenv()
flask_app = os.getenv("FLASK_APP")
flask_env = os.getenv("FLASK_ENV")

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app, resources={r"/users/*": {"origins": "*"}})

client = MongoClient("localhost", 27017)
MongoClient._connect(client)
users = client.flask_tanstack.users


@app.route(f"{base_api_url}/", methods=["GET"])
def index():
    return "Hello World"


# Routes
app.register_blueprint(users_bp)
