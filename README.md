# FREIGHTX

FREIGHTX is a comprehensive system for managing parcel shipments and passenger bookings. Users can log in, ship parcels, book tickets, and view real-time updates on budgets and ship capacities.

## Table of Contents
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Installation and Setup](#installation-and-setup)
5. [Running the Project](#running-the-project)
6. [Authors](#authors)
7. [License](#license)

## Features

### MVP Features
- User Authentication
- Dashboard with user options and budget status
- Shipping Module with weight validation
- Passenger Module with ticket availability checks
- Real-time updates on budgets and capacities

### User Stories
- Log in and view dashboard
- Ship a parcel
- Book a passenger ticket
- View remaining budget after transactions
- Check remaining ship weight capacity

### Stretch Features
- Transaction history
- Capacity and ticket availability notifications

## Project Structure

```
FREIGHTX/
│
├── client/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── README.md
│   └── src/
│       ├── components/
│       │   ├── App.js
│       │   ├── Auth.js
│       │   ├── Footer.js
│       │   ├── Home.js
│       │   ├── Navbar.js
│       │   ├── Passenger.js
│       │   ├── Portcard.js
│       │   ├── Ports.js
│       │   ├── Ship.js
│       │   ├── Shiplist.js
│       │   └── User.js
│       ├── css/
│       ├── index.css
│       ├── index.js
│       └── pics/
│
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── README.md
│
└── server/
    ├── app.py
    ├── config.py
    ├── instance/
    │   └── app.db
    ├── manage.py
    ├── migrations/
    ├── models.py
    ├── __pycache__/
    └── seed.py

```

### Key Directories and Files

- `client/`: Contains the React frontend application
  - `src/components/`: React components
  - `src/css/`: CSS stylesheets
  - `src/pics/`: Image assets
- `server/`: Contains the Flask backend application
  - `instance/`: Instance-specific configurations
  - `migrations/`: Database migration files
  - `app.py`: Main application file
  - `models.py`: Database models
  - `seed.py`: Database seeding script
- `CONTRIBUTING.md`: Guidelines for contributing to the project
- `LICENSE.md`: Project license information
- `Pipfile` and `Pipfile.lock`: Python dependency management
- `package.json`: Node.js dependency management
## Technologies Used

### Languages
<p align="center">
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/29fd6286-4e7b-4d6c-818f-c4765d5e39a9" alt="JavaScript" width="60" height="60"/>
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/1a797f46-efe4-41e6-9e75-5303e1bbcbfa" alt="Python" width="60" height="60"/>
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/3fb2cdf6-8920-462e-87a4-95af376418aa" alt="HTML" width="60" height="60"/>
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/67f477ed-6624-42da-99f0-1a7b1a16eecb" alt="CSS" width="60" height="60"/>
</p>

### Frameworks
<p align="center">
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/de038172-e903-4951-926c-755878deb0b4" alt="React" width="60" height="60"/>
  <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="Flask" width="60" height="60"/>
</p>

### Database
<p align="center">
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/398b19b1-9aae-4c1f-8bc0-d172a2c08d68" alt="MySQL" width="60" height="60"/>
</p>

### Tools
<p align="center">
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/ecf4c501-6100-4e2d-a7d6-c51e893cea09" alt="Git" width="60" height="60"/>
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/8d2aad21-2f54-4427-b354-6eb3fb5571c5" alt="VS Code" width="60" height="60"/>
</p>
- Frontend:  React
- Backend: Flask
- Database: MySQL
- Other: Git, npm

## Setup Instructions

Clone the Repository

    git clone https://github.com/Kamau-sam/FREIGHTX.git     

#### Step 2: Install Dependencies

Navigate to the server directory within the cloned repository 
    
    cd FREIGHTX/server     

install the required Python packages using pipenv,by running:

    pipenv install        

#### Step 3: Activate the Virtual Environment
Activate the virtual environment created by pipenv by running 

     pipenv shell                          

to ensure that the installed packages are accessible.

### Step 4: Set Up the Database
Initialize the database, apply migrations, and upgrade the database schema by running the following commands:
       
    python manage.py db init                     
    python manage.py db migrate                  
    python manage.py db upgrade                 

#### Step 5: Seed the Database
Seed the database with initial data by executing:

    python seed.py    

#### Step 6: Run the Flask Server

Start the Flask development server to begin serving the application:

    flask run       

## Frontend Setup

To set up the frontend part of the FreightX project, proceed with the following instructions:

#### Step 1: Navigate to the Client Directory
Change your current working directory to the client folder located at the root of the project:

    cd ../client                            

#### Step 2: Install Dependencies

Install the necessary Node.js packages for the frontend development:
             
    npm install             

####  Step 3: Start the React Development Server

Launch the React development server to view the application in your web browser:

    npm start      
    
After completing these steps:
- The backend server should be running on [http://localhost:5000](http://localhost:5000)
- The frontend should be accessible at [http://localhost:3000](http://localhost:3000)

## Authors

- [Kamau-sam](https://github.com/Kamau-sam)
- [All3n0](https://github.com/All3n0)
- [mfavorv](https://github.com/mfavorv)
- [dennysis](https://github.com/dennysis)
- [Gudu-Diana](https://github.com/Gudu-Diana)

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
