CRM Application
Backend: Node.js with Express
Database: PostgreSQL
Frontend: Index.pug

Project Initialization and Dependency Installation:
Initialize package.json using npm init.
Install required dependencies (express, PostgreSQL, dotenv, cors, nodemon) using npm install.
Module Imports and Environment Setup:
Import necessary modules (http, dotenv, path, cors, express) into server.js.
Create a .env file for environment variables (e.g., server port, database credentials).

Database Setup:
Create a PostgreSQL database named postgres.
Configure database settings such as host, port, username, and password.
Create a table named MyTable with columns (id, name, email, phonenumber) using SQL queries.
SQL Queries and Database Operations:
Use SQL queries (INSERT, DELETE, UPDATE, SELECT) to manipulate data in the database.
Implement functions in server.js for performing these operations.

Connection Initialization:
Initialize a connection to the PostgreSQL database using the pg module.
Ensure the connection is established when the server starts (npm start).

Backend Functionality:
Implement functions (select, insert, update, delete) in server.js to handle database operations.
Test each function to ensure it successfully executes the corresponding SQL query.

Frontend Integration:
Create an index.pug file for the frontend.
Implement buttons for displaying customers, deleting customers, and updating customers.

API Endpoints:
Use GET API for homepage (frontend) and POST for insert, delete, and update operations (backend).

Data Display on Frontend:
When the frontend is loaded, run a select query to fetch all data from the database and display it in a dynamic table.

Form Submission and Data Insertion:
Use a form with input boxes to add details.
When the "Add User" button is pressed, execute the backend query to insert the given data into the database.

Success Message Handling:
If data entry is successful, send a string "User added" to indicate successful addition.
Redirect back to the localhost homepage to see the new entry in the table.

Future Development:
Implement delete and update functionality in the frontend.
Backend queries and functions are already written to accommodate them.
Accessing the Application

Access the frontend using localhost:8080.
