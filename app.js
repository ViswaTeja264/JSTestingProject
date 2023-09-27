const express = require('express');
const app = express();
const userRoutes = require('./routes/routes');
const bodyParser = require('body-parser');
// const { connectToMongoDB } = require('./db/db');

app.use(bodyParser.json());
app.use(express.static('./views'));
app.use('/', userRoutes);

// connectToMongoDB();

// app.listen(3000, () => {
//     console.log("Server Running On Port 3000");
// });

module.exports = app