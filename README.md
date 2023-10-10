
# JavaScript Automation

This repository demonstrates JavaScript testing projects using the Cypress testing framework for end-to-end testing, an Express.js server for API testing, and the Postman tool for API testing and automation. 

## Table Of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Projects](#projects)
- [Testing](#testing)
  - [Cypress Tests](#cypress-tests)
  - [Express API Tests](#express-api-tests)

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

##

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
## Projects
1. Cypress Testing Project for MealDB

This project contains UI and API testing using Cypress for the [MealDB website](https://mealdatabase.netlify.app/).

### How to Run UI Tests

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
