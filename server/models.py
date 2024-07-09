from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
  __tablename__ = "users"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100), nullable=False)
  email = db.Column(db.String(100), unique=True, nullable=False)
  password = db.Column(db.String, nullable=False)
  balance = db.Column(db.Integer, nullable=False)

class Passenger(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    ticket_number = db.Column(db.String(10), unique=True, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    ship_id = db.Column(db.Integer, db.ForeignKey('ship.id'), nullable=True)

class Ship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    capacity_weight = db.Column(db.Float, nullable=False)
    current_weight = db.Column(db.Float, default=0.0)
    total_tickets = db.Column(db.Integer, nullable=False)
    available_tickets = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String)
    port_id = db.Column(db.Integer, db.ForeignKey('port.id'), nullable=False)
    contractor_id = db.Column(db.Integer,db.foreign.key('contractor.id'), nullable= False )

class Port(db.Model, SerializerMixin):
  __tablename__ = "ports"   
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  location = db.Column(db.String, nullable=False)
  image_url = db.Column(db.String)

class Contractor(db.Model, SerializerMixin):
  __tablename__ = "contractors"
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  specialization = db.Column(db.String)
  
class UserShipAssociation(db.Model, SerializerMixin):
    __tablename__ = 'user_ship_association'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    ship_id = db.Column(db.Integer, db.ForeignKey('ship.id'), nullable=False)
