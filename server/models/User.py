from mongoengine import Document, StringField, DateTimeField
from datetime import datetime
from flask.json.provider import DefaultJSONProvider
from enum import Enum


class Role(Enum):
    ADMIN = "admin"
    USER = "user"


class User(Document):
    fullName = StringField(required=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    role = StringField(choices=[role.value for role in Role], required=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
