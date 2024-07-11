#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Contractor, User, Port, Package,Passenger

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
        Port15 = Port(name=fake.name(), location=fake.city(), image_url="https://cdn.dribbble.com/users/6046276/screenshots/16344197/media/1f0be65047390b7c5bfe64c4f4a81618.jpg?resize=800x600&vertical=center"),
        Port16 = Port(name=fake.name(), location=fake.city(), image_url="https://cdn.dribbble.com/users/6046276/screenshots/16299979/media/10fd63a08651b1f431fd6c2100b218ee.jpg?resize=400x300&vertical=center"),
        Port17 = Port(name=fake.name(), location=fake.city(), image_url="https://cdn.dribbble.com/users/9033539/screenshots/20139768/media/8a18c8ef49b9827cad2537570505d2d8.jpg?resize=800x600&vertical=center"),
        Port18 = Port(name=fake.name(), location=fake.city(), image_url="https://cdn.dribbble.com/userupload/11671050/file/original-fee189f0a8c9fe6d06d127e84d1ee4e2.png?resize=450x338&vertical=center"),
        Port19 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/b0/06/24/b00624a7d0ba6e4543151ec518e3c998.jpg"),
        Port20 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/43/76/4b/43764b3310310de67b5a20d8bb1dc07f.jpg"),
        Port21 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/cf/49/6a/cf496a11430c879b5840504610967643.jpg"),
        Port22 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/fb/e9/ab/fbe9ab0cd0fb9622d0f6d573f7bea158.jpg"),
        Port23 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/f5/c6/22/f5c62299746c8811d75bddf72cb1b51f.jpg"),
        Port24 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/85/d5/84/85d5842f2b0c482816554bac98f8b2ca.jpg"),
        Port25 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/f0/42/97/f04297e09bb0ac138fbbded1e19b81ed.jpg"),
        Port26 = Port(name=fake.name(), location=fake.city(), image_url="https://i.pinimg.com/236x/86/09/2d/86092dfef0b5958b35932c180e560aa4.jpg")
        
        db.session.add_all([port1, port2, port3, port4, port5, port6, port7, port8, port9, port10, port11, port12, port13, port14, Port15 ,Port16, Port17,Port18,Port19,Port20,Port21,Port22,Port23,Port24,Port25,Port26])
        db.session.commit()
        print("Ports seeding complete.")


        
        passengers = [
            Passenger(
                user_id=rc(users).id,
                ticket_number=fake.bothify(text='???-########'),
                cost=fake.pyfloat(left_digits=3, right_digits=2, positive=True, min_value=100, max_value=1000),
                destination=fake.city(),
                ship_id=rc(ships).id # type: ignore
            )
            for _ in range(100)
        ]

        db.session.add_all(passengers)
        db.session.commit()
        print("Passengers seeding complete.")

        
        packages = [
            Package(
                ship_id=rc(ships).id, # type: ignore
                destination=fake.city(),
                price=randint(100, 1000),
                status=rc(["Shipped", "Pending", "Delivered"]),
                weight=randint(1, 100)
            )
            for _ in range(50)
        ]

        db.session.add_all(packages)
        db.session.commit()
        print("Packages seeding complete.")


        print("Seeding complete!")
