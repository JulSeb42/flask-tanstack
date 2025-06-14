from flask import Blueprint, jsonify, request
from bcrypt import gensalt, hashpw
from bcrypt import hashpw, gensalt
from utils.data import base_api_url
from server.utils.connect_db import users
from models.User import User

users_bp = Blueprint("users", __name__)


@users_bp.route(f"{base_api_url}/users", methods=["GET"])
def all_users():
    res = users.find()
    all_users: User = []
    for user in res:
        user["password"] = str(user["password"])
        salt = gensalt(10)
        user["_id"] = str(user["_id"])
        hashed_pw = hashpw(user["password"].encode("utf-8"), salt)
        user["password"] = hashed_pw.decode("utf-8")
        all_users.append(user)
    res = jsonify(all_users)
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res


@users_bp.route(f"{base_api_url}/users/new-user", methods=["POST"])
def create_user():
    data = request.get_json()
    password = data["password"]
    salt = gensalt(10)
    hashed_pw = hashpw(password.encode("utf-8"), salt)
    created_user: User = {
        "fullName": data["fullName"],
        "email": data["email"],
        "password": str(hashed_pw.decode("utf-8").removeprefix("b")),
    }
    users.insert_one(created_user)
    created_user["_id"] = str(created_user["_id"])
    return jsonify(created_user), 201
