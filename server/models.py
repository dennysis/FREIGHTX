from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt


class User(db.Model, SerializerMixin):
    tablename = "users"
    serialize_rules = ('-password', '-passengers.user')
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)
    balance = db.Column(db.Integer, nullable=False)
    passengers = db.relationship('Passenger', back_populates='user')
    ships = association_proxy('passengers', 'ship')
    transactions = db.relationship('Transaction', back_populates='user')

@hybrid_property
def password_hash(self):
    raise AttributeError('Password may not be viewed.')

@password_hash.setter
def password_hash(self, password):
    password_hash = bcrypt.generate_password_hash(
        password.encode('utf-8'))
    self._password_hash = password_hash.decode('utf-8')

def authenticate(self, password):
    return bcrypt.check_password_hash(
        self._password_hash, password.encode('utf-8'))

def to_dict(self):
    return {
        'id': self.id,
        'name': self.name,
        'email': self.email,
        'balance': self.balance,
        'transactions': [transaction.to_dict() for transaction in self.transactions]
    }
def __repr__(self):
  return f'<User {self.name}>'
class Passenger(db.Model):
    tablename = "passengers"
    serialize_rules = ('-user.passengers', '-ship.passengers')
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    ticket_number = db.Column(db.String(10), unique=True, nullable=False)
    cost = db.Column(db.Float, nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    ship_id = db.Column(db.Integer, db.ForeignKey('ships.id'), nullable=True)
    ship = db.relationship('Ship', back_populates='passengers')
    user = db.relationship('User', back_populates='passengers')

def __repr__(self):
  return f'<Passenger {self.ticket_number}>'
class Ship(db.Model):
    __tablename__ = 'ships'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    capacity_weight = db.Column(db.Integer, nullable=False)
    current_weight = db.Column(db.Integer, nullable=False)
    total_tickets = db.Column(db.Integer, nullable=False)
    available_tickets = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String, nullable=False)
    port_from_id = db.Column(db.Integer, db.ForeignKey('ports.id'), nullable=False)
    port_to_id = db.Column(db.Integer, db.ForeignKey('ports.id'), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    contractor_id = db.Column(db.Integer, db.ForeignKey('contractors.id'), nullable=False)

    port_from = db.relationship('Port', foreign_keys=[port_from_id])
    port_to = db.relationship('Port', foreign_keys=[port_to_id])

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'capacity_weight': self.capacity_weight,
            'current_weight': self.current_weight,
            'total_tickets': self.total_tickets,
            'available_tickets': self.available_tickets,
            'category': self.category,
            'port_from': self.port_from.to_dict(),
            'port_to': self.port_to.to_dict(),
            'price': self.price,
            'contractor_id': self.contractor_id,
        }

class Port(db.Model, SerializerMixin):
  tablename = "ports"
  serialize_rules = ('-ships.port') 
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  location = db.Column(db.String, nullable=False)
  image_url = db.Column(db.String)
  ships = db.relationship('Ship', back_populates='port')

  def repr(self):
      return f'<Port {self.name}>'

  def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            'image_url': self.image_url,
            'ships': [ship.to_dict() for ship in self.ships]
        }

class Contractor(db.Model, SerializerMixin):
  tablename = "contractors"
  serialize_rules = ('-ships.contractor',)
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  specialization = db.Column(db.String)
  contact_info = db.Column(db.String)
  ships = db.relationship('Ship', back_populates='contractor')

  def repr(self):
      return f'<Contractor {self.name}>'

class Package(db.Model,SerializerMixin):
    tablename = 'packages'
    id = db.Column(db.Integer, primary_key=True)
    ship_id = db.Column(db.Integer, db.ForeignKey('ships.id'), nullable=False)
    destination = db.Column(db.String)
    price = db.Column(db.Integer, nullable=False)
    status = db.Column (db.String)
    weight = db.Column(db.Integer, nullable=False)

def __repr__(self):
    return f'<Package {self.destination}>'
  
class UserShipAssociation(db.Model, SerializerMixin):
    tablename = 'user_ship_association'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    ship_id = db.Column(db.Integer, db.ForeignKey('ships.id'), nullable=False)

class Transaction(db.Model):
    tablename = 'transactions'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=db.func.now())

user = db.relationship('User', back_populates='transactions')

def __repr__(self):
    return f'<Transaction {self.id}>'