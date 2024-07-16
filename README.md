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
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/>
</p>

### Frameworks
<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" alt="Flask" width="50" height="50"/>
</p>

### Database
<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" width="50" height="50"/>
</p>

### Tools
<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" width="50" height="50"/>
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
