#!/usr/bin/env python3

# Standard library imports


# Remote library imports
from flask import request, jsonify, session, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

from models import User
# Views go here!

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    
    if user and user.password == password:
        session['user_id'] = user.id
        return jsonify({'success': True})
    
    return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

@app.route('/checksession', methods=['GET'])
def check_session(self):
    user_id = session['user_id']
    if user_id:
        user = User.query.filter(User.id == user_id).first()
        return make_response(user.to_dict(), 200)
    else:
        return {"error": "Unauthorised."}, 401   

if __name__ == '__main__':
    app.run(port=5555, debug=True)

