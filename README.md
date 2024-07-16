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
FREIGHTX
├── client
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── README.md
│   └── src
│       ├── components
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
│       ├── css
│       ├── index.css
│       ├── index.js
│       └── pics
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── README.md
└── server
    ├── app.py
    ├── config.py
    ├── instance
    │   └── app.db
    ├── manage.py
    ├── migrations
    ├── models.py
    ├── pycache
    └── seed.py


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

<p align="center">
  <table align="center">
    <tr>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg" alt="JavaScript" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg" alt="React" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg" alt="NodeJs" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/python-original.svg" alt="Python" width="48" height="48"/>
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mysql-original-wordmark.svg" alt="MySQL" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg" alt="HTML5" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg" alt="CSS3" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg" alt="Git" width="48" height="48"/>
      </td>
    </tr>
  </table>
</p>

- Frontend: JavaScript, React, HTML5, CSS3
- Backend: Python (Flask), Node.js
- Database: MySQL
- Other: Git, Linux

## Installation and Setup

1. Clone the repository:
git clone https://github.com/your-username/FREIGHTX.git
cd FREIGHTX
Copy
2. Set up the backend:
cd server
pipenv install
pipenv shell
Copy
3. Set up the frontend:
cd ../client
npm install
Copy
4. Set up the database:
cd ../server
flask db upgrade
python seed.py
Copy
## Running the Project

1. Start the backend server:
cd server
flask run
Copy
2. In a new terminal, start the frontend:
cd client
npm start
Copy
3. Open `http://localhost:3000` in your browser.

## Authors

- [Kamau-sam](https://github.com/Kamau-sam)
- [All3n0](https://github.com/All3n0)
- [mfavorv](https://github.com/mfavorv)
- [dennysis](https://github.com/dennysis)
- [Gudu-Diana](https://github.com/Gudu-Diana)

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
