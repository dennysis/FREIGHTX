#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Contractor

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

        print("Seeding complete!")
