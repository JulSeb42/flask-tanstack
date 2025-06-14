from flask import Blueprint
from server.utils.connect_db import users
from bcrypt import gensalt, hashpw
import jwt

