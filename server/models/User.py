from mongoengine import Document, StringField, DateTimeField
from datetime import datetime
from flask.json.provider import DefaultJSONProvider


class User(Document):
    fullName = StringField(required=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    created_at = DateTimeField(default=datetime.utcnow)
    updated_at = DateTimeField(default=datetime.utcnow)
