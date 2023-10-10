
# JavaScript Automation

This repository demonstrates JavaScript testing projects using the Cypress testing framework for end-to-end testing, an Express.js server for API testing, and the Postman tool for API testing and automation. 

## Table Of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Projects](#Automated-Testing-Projects)

## Project Overview
This projects is designed to demonstrate testing methodologies using popular JavaScript tools and frameworks. It consists of end-to-end tests using Cypress for the frontend and API tests using Express.js and Postman for the backend.

For detailed code and implementation, please visit the GitHub repository: [Link to GitHub Repository](https://github.com/ViswaTeja264/Javascript-Automation).

## Prerequisites
Make sure you have the following prerequisites installed:

- Node.js and npm
- Cypress
- Express.js
- Postman

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/ViswaTeja264/Javascript-Automation

2. Install project dependencies:
    ```bash
   npm install

## Usage
1. Start the Express.js server
    ```bash
   npm start
2. Open Postman tool and send POST request to server
   ```bash
   http://localhost:3000/
3. Send The Request Body
   ```bash
   {
    "TaskName" : ".....",
    "url"  : "....."
   }
4. Click On Send To Send The Post Request
5. Capture The Cypress Test Results In Response Body

## Folder Structure
- JavaScriptAutomation
   - bin
      - www.js
   - controllers
      - CypressController.js
   - cypress
      - e2e
         - FrontEndAPITesting.cy.js
         - FrontEndUITesting.cy.js
         - MealsDB.cy.js
         - MealsDBAPITesting.cy.js
         - Portfolio.cy.js
         - PortfolioAPITesting.cy.js
      - fixtures
         - Tasks.json
      - support
         - commands.js
         - e2e.js
   - db
      - db.js
   - modal
      - schema.js
   - node_modules
      - ......
   - routes
      - routes.js
   - views
      - index.html
      - script.js
   - .gitignore
   - app.js
   - cypress.config.js
   - package-lock.json
   - package.json
## Automated Testing Projects

This repository contains three Cypress testing projects:

1. **Cypress Testing for MealDB Website**
   - UI testing for the [MealDB website](https://mealdatabase.netlify.app/).
   - [Documentation and Test Details](#cypress-ui-testing-for-mealDB)
   - API testing for the [MealDB website](https://mealdatabase.netlify.app/).
   - [Documentation and Test Details](#cypress-api-testing-for-mealDB)

2. **Cypress Testing for Portfolio Website**
   - UI testing for the [Portfolio website](https://hackathon-suriya-portfolio.netlify.app/)
   - [Documentation and Test Details](#cypress-ui-testing-for-portfolio)
   - API testing for the [Portfolio website](https://hackathon-suriya-portfolio.netlify.app/)
   - [Documentation and Test Details](#cypress-api-testing-for-portfolio)

3. **Cypress Testing for Fullstack Node.js App**
   - UI testing On The [FrontEnd App](https://guvi-note-frontend.vercel.app/)
   - [Documentation and Test Details](#cypress-ui-testing-for-fullstack-nodejs-app)
   - API testing On The [BackEnd App](https://guvi-goal-backend.onrender.com/)
   - [Documentation and Test Details](#cypress-api-testing-for-fullstack-nodejs-app)


### Cypress UI Testing For MealDB

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start The Server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "MealDBUI",
    "url"  : "https://mealdatabase.netlify.app/"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.

### Cypress API Testing For MealDB

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the local server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "MealDBAPI",
    "url"  : "https://mealdatabase.netlify.app/"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.

### Cypress UI Testing For Portfolio

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start The Server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "PortfolioUI",
    "url"  : "https://hackathon-suriya-portfolio.netlify.app/"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.

### Cypress API Testing For Portfolio

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the local server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "PortfolioAPI",
    "url"  : "https://hackathon-suriya-portfolio.netlify.app/"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.

### Cypress UI Testing For Fullstack Nodejs App

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start The Server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "FullStackUI",
    "url"  : "https://guvi-note-frontend.vercel.app/"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.

### Cypress API Testing For Fullstack Nodejs App

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start The Server: `npm start`
4. Send The Post Request To The Server:
   `http://localhost:3000/`
5. Pass The Request Body With TaskName And URL:

   {
    "TaskName" : "FullStackAPI",
    "url"  : "https://guvi-goal-backend.onrender.com"
   }

6. Click On Send To Send The Post Request That Will Automatically Trigger The Cypress TestCases.