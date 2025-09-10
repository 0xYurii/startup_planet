 # Startup Planet API 🚀
 
 Welcome to the Startup Planet API! This is a simple Express.js application that serves a dataset of the world's most promising startups. You can query for startups based on various criteria.
 
 [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
 
 ## Table of Contents
 
- [Startup Planet API 🚀](#startup-planet-api-)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [1. Get All Startups](#1-get-all-startups)
    - [2. Filter Startups by Field](#2-filter-startups-by-field)
    - [Error Handling](#error-handling)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
 
 ## Features
 
 ✨ Serves a static dataset of startups.
 
 ✨ Filter startups by industry, country, continent, funding status, and MVP status.
 
 ✨ RESTful API endpoints for easy integration.
 
 ✨ Built with modern JavaScript (ES Modules), Node.js, and Express.
 
 ## Getting Started
 
 Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
 
 ### Prerequisites
 
 You need to have [Node.js](https://nodejs.org/) (version 18 or later recommended) and npm installed on your machine.
 
 ### Installation
 
 1.  **Clone the repository:**
 
     ```bash
     git clone https://github.com/0xYurii/startup_planet.git
     cd startup_planet
     ```
 
 2.  **Install dependencies:**
 
     ```bash
     npm install
     ```
 
 ## Usage
 
 To run the server in development mode with automatic reloading (thanks to `nodemon`), use:
 
 ```bash
 npm run dev
 ```
 
 To run the server in production mode, use:
 
 ```bash
 npm start
 ```
 
 The server will start on `http://localhost:3000`.
 
 ## API Endpoints
 
 The base URL for all API endpoints is `/api`.
 
 ### 1. Get All Startups
 
 Retrieves a list of all startups. You can filter the results using query parameters.
 
 -   **Endpoint:** `GET /api`
 -   **Query Parameters:**
     -   `industry` (string): Filter by industry.
     -   `country` (string): Filter by country.
     -   `continent` (string): Filter by continent.
     -   `is_seeking_funding` (boolean): Filter by funding status (`true` or `false`).
     -   `has_mvp` (boolean): Filter by MVP status (`true` or `false`).
 
 **Example Request:**
 
 ```http
 GET /api?industry=AI&country=USA
 ```
 
 **Example Response:**
 
 ```json
 [
   {
     "id": 1,
     "name": "TechNova AI",
     "industry": "AI",
     "founded": 2021,
     "country": "USA",
     "continent": "North America",
     // ... other fields
   }
 ]
 ```
 
 ### 2. Filter Startups by Field
 
 Retrieves startups that match a specific term within an allowed field.
 
 -   **Endpoint:** `GET /api/:field/:term`
 -   **URL Parameters:**
     -   `field` (string): The field to search in. Allowed fields are `country`, `continent`, `industry`.
     -   `term` (string): The value to search for.
 
 **Example Request:**
 
 ```http
 GET /api/country/Germany
 ```
 
 **Example Response:**
 
 ```json
 [
   {
     "id": 2,
     "name": "GreenGrid Energy",
     "industry": "Renewable Energy",
     "founded": 2018,
     "country": "Germany",
     "continent": "Europe",
     // ... other fields
   },
   {
     "id": 9,
     "name": "Visionary Network",
     "industry": "Healthcare",
     "founded": 2016,
     "country": "Germany",
     "continent": "Europe",
     // ... other fields
   }
 ]
 ```
 
 ### Error Handling
 
 If you request an invalid endpoint or use a disallowed search field, the API will return a JSON error message with an appropriate status code (e.g., `404 Not Found` or `400 Bad Request`).
 
 ## Project Structure
 
 ```
 .
 ├── controllers/
 │   ├── getAllData.js         # Logic for GET /api
 │   └── getDataByPathParams.js # Logic for GET /api/:field/:term
 ├── data/
 │   └── data.js               # The startup dataset
 ├── routes/
 │   └── apiRoute.js           # API routes
 ├── .gitignore
 ├── package.json
 ├── package-lock.json
 ├── README.md
 └── server.js                 # Main server entry point
 ```
 
 ## Contributing
 
 Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
 
 If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
 
 1.  Fork the Project
 2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
 3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
 4.  Push to the Branch (`git push origin feature/AmazingFeature`)
 5.  Open a Pull Request
