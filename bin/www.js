const app = require('../app');

const { connectToMongoDB } = require('../db/db');

const port = process.env.PORT || 3000; // Use the specified port or a default port

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});