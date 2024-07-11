#!/usr/bin/env python3

# Standard library imports
import os

# Remote library imports
from flask import Flask, request, jsonify, session, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import db, bcrypt
from models import User, Ship

# App configuration
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

# Routes
@app.route('/')
def index():
    return "<h1>Code challenge</h1>"

@app.route('/ships', methods=['GET'])
def get_ships():
    ships = Ship.query.all()
    ships_data = [ship.to_dict() for ship in ships]
    return make_response(jsonify(ships_data), 200)

@app.route('/signup', methods=['POST'])
def sign_up():
    data = request.get_json()
    name = data.get('username')
    email = data.get('email')
    password = data.get('password')
    balance = data.get('balance')

    if not name or not email or not password or not balance:
        return jsonify({"error": "All fields are required"}), 422

    new_user = User(
        name=name,
        email=email,
        _password_hash=password,
        balance=balance,
    )

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except IntegrityError:
        db.session.rollback()
        return jsonify({"error": "Email already exists"}), 422
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": "Failed to create user", "details": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()

    if user and user.authenticate(password):
        session['user_id'] = user.id
        return jsonify({'success': True})

    return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

@app.route('/checksession', methods=['GET'])
def check_session():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.filter(User.id == user_id).first()
        return make_response(jsonify(user.to_dict()), 200)
    else:
        return jsonify({"error": "Unauthorized"}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logged out successfully", "action": "prompt_login"}), 200

# Run the app
if __name__ == '__main__':
    app.run(port=5555, debug=True)
