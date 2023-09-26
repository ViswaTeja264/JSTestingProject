const { ObjectId } = require('mongodb');
const { CypressResult } = require('../schema/schema');
const cypress = require('cypress');
const { getClient, getDbName } = require('../db/db'); // Import MongoDB connection and dbName

const runCypressTests = async (req, res) => {
  if (req.body.TaskName === 'MealDB' || req.body.TaskName === 'Portfolio') {
    try {
      const results = await cypress.run({
        config: {
          baseUrl: req.body.url,
        },
        spec: [
          req.body.TaskName === 'MealDB' ? 'cypress/e2e/MealsDB.cy.js' : 'cypress/e2e/Portfolio.cy.js'
        ],
      });

      console.log(results);

      // Extract test names and pass/fail status from the runs and tests
      const tests = results.runs.reduce((accumulator, run) => {
        const specName = run.spec.name;

        run.tests.forEach((test) => {
          accumulator.push({
            testName: `${specName}: ${test.title}`,
            passed: test.state === 'passed',
          });
        });

        return accumulator;
      }, []);

      const cypressResult = new CypressResult({
        taskName: req.body.TaskName,
        totalTests: results.totalTests,
        totalPassed: results.totalPassed,
        totalFailed: results.totalFailed,
        tests : tests
        // Add more fields as needed based on your specific data requirements
      });

      // Assign a new ObjectId to the _id field
      cypressResult._id = new ObjectId();

      // Get the MongoDB client and database name from the db.js module
      const client = getClient();
      const dbName = getDbName();

      // Store the results in MongoDB
      const db = client.db(dbName);
      const collection = db.collection(`${req.body.TaskName}TestResults`);
      const savedResult = await collection.insertOne(cypressResult);

      console.log('Cypress results stored in MongoDB:', savedResult.insertedCount);

      // Send a response back to the client
      res.json({ message: 'Cypress tests completed and results stored in MongoDB', savedResult });

      // Process the results as needed
      console.log('Cypress results:', cypressResult);
    } catch (error) {
      console.error('Cypress tests failed:', error);

      // Send an error response back to the client
      res.status(500).json({ error: 'Cypress tests failed' });
    }
  } else {
    if (req.body.TaskName === '') {
      const errorMsg = new Error('TaskName Is Undefined');
      console.log(errorMsg);
      return res.status(400).json({ error: 'TaskName Is Undefined' });
    } else {
      const errorMsg = new Error('TaskName Is Not Valid');
      console.log(errorMsg);
      return res.status(400).json({ error: 'TaskName Is Not Valid' });
    }
  }
};

module.exports = { runCypressTests };
