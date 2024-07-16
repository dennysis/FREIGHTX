FREIGHTX
Table of Contents

Project Overview
Features
Project Structure
Technologies Used
Installation and Setup
Running the Project
Authors
License

Project Overview
FREIGHTX is a comprehensive system designed to facilitate user interactions in managing parcel shipments and passenger bookings. The platform allows users to log in to their accounts and choose between shipping a parcel or booking a passenger ticket. The system ensures that parcel shipments adhere to maximum weight limits and adjusts available passenger tickets accordingly. Additionally, user budgets are updated based on their transactions.
Features
Minimum Viable Product (MVP)

User Authentication:

Implement login and registration functionality.


Dashboard:

Display user options and budget status.


Shipping Module:

Validate parcel weight against ship's capacity.


Passenger Module:

Check ticket availability and update user's budget.


Real-time Updates:

Display real-time updates on user budget, ship's weight capacity, and ticket availability.



User Stories

As a user, I can log in and view my dashboard.
As a user, I can choose to ship a parcel.
As a user, I can choose to book a passenger ticket.
As a user, I can see my remaining budget after a transaction.
As a user, I can view the remaining weight capacity of a ship.

Stretch Features

View transaction history (parcel shipping and passenger bookings).
Receive notifications for ship's capacity reaching maximum or ticket availability changes.

Project Structure
CopyFREIGHTX/
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.js
│   │   │   ├── Auth.js
│   │   │   ├── Footer.js
│   │   │   ├── Home.js
│   │   │   ├── Navbar.js
│   │   │   ├── Passenger.js
│   │   │   ├── Portcard.js
│   │   │   ├── Ports.js
│   │   │   ├── Ship.js
│   │   │   ├── Shiplist.js
│   │   │   └── User.js
│   │   ├── css/
│   │   ├── pics/
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── server/
│   ├── instance/
│   │   └── app.db
│   ├── migrations/
│   ├── __pycache__/
│   ├── app.py
│   ├── config.py
│   ├── manage.py
│   ├── models.py
│   ├── seed.py
│   └── your_database.db
├── CONTRIBUTING.md
├── LICENSE.md
├── package.json
├── Pipfile
├── Pipfile.lock
└── README.md
Technologies Used
<h3 align="center">Languages and Tools:</h3>
<p align="center">
  <table align="center">
    <tr>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg" alt="JavaScript" title="JavaScript" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg" alt="HTML5" title="HTML5" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg" alt="CSS3" title="CSS3" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg" alt="React" title="React" width="48" height="48"/>
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/linux-original.svg" alt="Linux" title="Linux" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg" alt="Git" title="Git" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg" alt="NodeJs" title="NodeJs" width="48" height="48"/>
      </td>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/python-original.svg" alt="Python" title="Python" width="48" height="48"/>
      </td>
    </tr>
    <tr>
      <td align="center" width="96">
        <img src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mysql-original-wordmark.svg" alt="SQL" title="SQL" width="48" height="48"/>
      </td>
    </tr>
  </table>
</p>
Technology Usage

JavaScript: Used for frontend development and React components.
HTML5 & CSS3: Used for structuring and styling the frontend.
React: Frontend framework for building the user interface.
Linux: Development environment.
Git: Version control system for collaborative development.
Node.js: Backend runtime environment.
Python: Used for backend development with Flask.
MySQL: Database management system.

Installation and Setup

Clone the repository:
Copygit clone https://github.com/your-username/FREIGHTX.git
cd FREIGHTX

Set up the backend:
Copycd server
pipenv install
pipenv shell

Set up the frontend:
Copycd ../client
npm install

Set up the database:
Copycd ../server
flask db upgrade
python seed.py


Running the Project

Start the backend server:
Copycd server
flask run

In a new terminal, start the frontend development server:
Copycd client
npm start

Open your browser and navigate to http://localhost:3000 to view the application.

Authors

Kamau-sam
All3n0
mfavorv
dennysis
Gudu-Diana

License
This project is licensed under the MIT License. See the LICENSE.md file for details.
