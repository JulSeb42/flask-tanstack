from flask import Blueprint, jsonify, request
from bcrypt import gensalt, hashpw
from utils.data import base_api_url
from utils.connect_db import users
from models.User import User

users_bp = Blueprint("users", __name__)
base_api_url = f"{base_api_url}/users"


@users_bp.route(f"{base_api_url}/all-users", methods=["GET"])
def all_users():
    res = users.find()
    all_users: User = []
    for user in res:
        user["_id"] = str(user["_id"])
        all_users.append(user)
    res = jsonify(all_users)
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res
