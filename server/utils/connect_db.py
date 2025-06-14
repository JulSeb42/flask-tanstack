from pymongo import MongoClient

client = MongoClient("localhost", 27017)
MongoClient._connect(client)
users = client.flask_tanstack.users
