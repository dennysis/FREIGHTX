#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User,Passenger, Ship, Port, Contractor

# Seed data function
def seed_data():
    db.create_all()
    fake = Faker()

    # Create 100 users
    for _ in range(100):
        name = fake.name()
        email = fake.email()
        password = fake.password()
        balance = randint(1000, 100000)

        user = User(name=name, email=email, password=password, balance=balance)
        db.session.add(user)

    # Create 10 ships
    for _ in range(10):
        name = fake.company()
        capacity_weight = randint(1000, 5000)
        current_weight = 0
        total_tickets = randint(1000, 5000)
        available_tickets = total_tickets
        category = rc(["passenger", "freight"])
        port_id = randint(1,

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
