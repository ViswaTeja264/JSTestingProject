const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://viswa:viswa12345@cluster0.gjra4tl.mongodb.net/';
const dbName = 'CypressTestResults';

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = {
  connectToMongoDB,
  getClient: () => client,
  getDbName: () => dbName,
};
