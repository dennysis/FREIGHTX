#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Contractor, User, Port

# Seed data function
if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        # Drop and recreate all tables
        db.drop_all()
        db.create_all()

        contractors = [
            "Maersk", "Mediterranean Shipping Company (MSC)", "CMA CGM Group",
            "COSCO Shipping", "Hapag-Lloyd", "ONE (Ocean Network Express)",
            "Evergreen Marine", "Yang Ming Marine Transport", "Hyundai Merchant Marine",
            "ZIM Integrated Shipping Services", "Pacific International Lines (PIL)",
            "Kawasaki Kisen Kaisha, Ltd. (K Line)", "Mitsui O.S.K. Lines (MOL)",
            "Nippon Yusen Kabushiki Kaisha (NYK Line)", "HMM (Hyundai Merchant Marine)",
            "Wan Hai Lines", "IRISL Group", "Hansa Heavy Lift", "Swire Shipping",
            "OOCL (Orient Overseas Container Line)"
        ]

        # Create sample contractors
        contractor_objects = [Contractor(name=contractor, specialization="Shipping") for contractor in contractors]

        db.session.add_all(contractor_objects)
        db.session.commit()

        users = []
        for _ in range(50):
            user = User(
                name=fake.name(),
                email=fake.email(),
                password=fake.password(length=16),
                balance=randint(1000, 10000)
            )
            users.append(user)
        
        db.session.add_all(users)
        db.session.commit()
        print("Users seeding complete.")

        port1 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/7e/59/90/7e59907afe21a134ef14708363e19097.jpg")
        port2 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/82/2d/4a/822d4afeb757402d3502248c0d52d9c0.jpg")
        port2 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/564x/1a/c6/df/1ac6df405650ad126e5c162da82d3ed5.jpg")
        port3 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/f4/63/eb/f463eb69471c63ea8170c5927dbd2119.jpg")
        port4 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/33/28/d0/3328d06a2256838144b5eb5947520482.jpg")
        port5 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/564x/33/28/d0/3328d06a2256838144b5eb5947520482.jpg")
        port6 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/b6/6e/d5/b66ed5f94b5341af6641bd4587cf9504.jpg")
        port7 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/40/f1/e5/40f1e52c465af48aa4b3df7b6af925cf.jpg")
        port8 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/564x/aa/0b/c0/aa0bc081469f7968c2a48f82733c2a9a.jpg")
        port9 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/61/79/17/617917323e2cdceb9e63d610cd650ac1.jpg")
        port10 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/8f/11/83/8f1183d2bbde782b906652ca10bfc75a.jpg")
        port11= Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/7e/7d/0d/7e7d0dd5210156d36a3be44e4625af98.jpg")
        port12 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/01/c7/e6/01c7e67ebad481a0b97bb39a7b6ae926.jpg")
        port13= Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/99/f5/6f/99f56f46b22fccc8ddb506c2d6482e57.jpg")
        port14 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/11/0a/0c/110a0c8611687e8b37c51cc4a82aea79.jpg")
    
        db.session.add_all([port1, port2, port3, port4, port5, port6, port7, port8, port9, port10, port11, port12, port13, port14])
        db.session.commit()
        print("Ports seeding complete.")

        print("Seeding complete!")
