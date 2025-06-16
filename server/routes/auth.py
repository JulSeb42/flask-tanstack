from flask import Blueprint, request, jsonify
from bcrypt import gensalt, hashpw
import jwt
import os
from dotenv import load_dotenv
from utils.connect_db import users
from utils.data import jwtConfig, base_api_url
from models.User import User

load_dotenv()
token_secret = os.getenv("TOKEN_SECRET")

auth_bp = Blueprint("auth", __name__)

base_api_url = f"{base_api_url}/auth"


@auth_bp.route(f"{base_api_url}/signup", methods=["POST"])
def signup():
    data = request.get_json()
    password = data["password"]
    salt = gensalt(10)
    hashed_pw = hashpw(password.encode("utf-8"), salt)
    created_user: User = {
        "fullName": data["fullName"],
        "email": data["email"],
        "password": str(hashed_pw.decode("utf-8").removeprefix("b")),
        "role": "user",
    }
    users.insert_one(created_user)
    created_user["_id"] = str(created_user["_id"])
    auth_token = jwt.encode({"user": created_user}, key=token_secret, algorithm="HS256")
    return jsonify({"user": created_user, "authToken": auth_token}), 201


@auth_bp.route(f"{base_api_url}/login", methods=["POST"])
def login():
    data = request.get_json()
    user = users.find_one({"email": data["email"]})
    user["_id"] = str(user["_id"])
    auth_token = jwt.encode({"user": user}, key=token_secret, algorithm="HS256")
    return jsonify({"user": user, "authToken": auth_token}), 201


@auth_bp.route(f"{base_api_url}/loggedin", methods=["GET"])
def is_logged_in():
    authorization = request.headers["authorization"]
    bearer = authorization.split(" ")
    if bearer[0] == "Bearer":
        token = bearer[1]
        auth_token = jwt.decode(token, key=token_secret, algorithms=["HS256"])
        return auth_token["user"], 201
    return None, 500
