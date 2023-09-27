const mongoose = require('mongoose');

// Define a schema for the data you want to store
const cypressResultSchema = new mongoose.Schema({
  taskName: String,
  totalTests: Number,
  totalPassed: Number,
  totalFailed: Number,

  // Add an array field for storing test results
  tests: [
    {
      testName: String,
      passed: Boolean,
    },
  ],

  // Add more fields as needed based on your specific data requirements
});

// Create a Mongoose model based on the schema
const CypressResult = mongoose.model('CypressResult', cypressResultSchema);

module.exports = { CypressResult };
