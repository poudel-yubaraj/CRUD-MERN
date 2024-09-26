const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config(); // Loads environment variables
const port = process.env.PORT|| 5000;

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`); // Log the correct port
});
