from sqlalchemy.exc import IntegrityError, SQLAlchemyError
from datetime import datetime

from flask import request, jsonify, session, make_response
from flask_restful import Resource

from config import app, db, api, bcrypt

from models import User, Ship, Port, Transaction,Contractor

@app.route('/ships', methods=['GET'])
def get_ships():
    ships = Ship.query.all()
    ships_data = [ship.to_dict() for ship in ships]
    return make_response(jsonify(ships_data), 200)

@app.route('/ports', methods=['GET'])
def get_ports():
    ports = Port.query.all()
    port_data = [port.to_dict() for port in ports]
    return make_response(jsonify(port_data), 200)
@app.route('/contractors', methods=['GET'])
def get_contractors():
    contractors = Contractor.query.all()
    contractor_data = [contractor.to_dict() for contractor in contractors]
    return make_response(jsonify(contractor_data), 200)
@app.route('/ports/<int:port_id>', methods=['GET'])
def get_port_by_id(port_id):
    port = Port.query.filter_by(id=port_id).first()  # Adjusted filter_by to filter by port_id
    if not port:
        return make_response(jsonify({'error': 'Port not found'}), 404)
    
    return make_response(jsonify(port.to_dict()), 200)
@app.route('/ports/<int:port_id>/ships', methods=['GET'])
def get_ships_by_port(port_id):
    category = request.args.get('category')
    if category:
        ships = Ship.query.filter((Ship.port_from_id == port_id) | (Ship.port_to_id == port_id), Ship.category == category).all()
    else:
        ships = Ship.query.filter((Ship.port_from_id == port_id) | (Ship.port_to_id == port_id)).all()
    ships_data = [ship.to_dict() for ship in ships]
    return make_response(jsonify(ships_data), 200)

@app.route('/ships/<int:ship_id>', methods=['GET'])
def get_ship(ship_id):
    ship = Ship.query.get_or_404(ship_id)
    return make_response(jsonify(ship.to_dict()), 200)

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
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'success': False, 'message': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not user.authenticate(password):
        return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

    session['user_id'] = user.id
    return jsonify({'success': True, 'message': 'Login successful'})

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

@app.route('/transactions', methods=['POST'])
def create_transaction():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized'}), 401

    data = request.json
    new_transaction = Transaction(user_id=user_id, amount=data['amount'], description=data['description'])

    try:
        db.session.add(new_transaction)
        db.session.commit()
        return jsonify({'message': 'Transaction created successfully!'}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/transactions', methods=['GET'])
def get_transactions():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized'}), 401

    transactions = Transaction.query.filter_by(user_id=user_id).all()
    transactions_data = [{
        'id': transaction.id,
        'amount': transaction.amount,
        'description': transaction.description,
        'created_at': transaction.created_at
    } for transaction in transactions]
    
    return make_response(jsonify(transactions_data), 200)

@app.route('/user', methods=['GET'])
def user_details():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized'}), 401

    user = User.query.get(user_id)
    return make_response(jsonify(user.to_dict()), 200)

if __name__ == '__main__':
    app.run(port=5555, debug=True)
