const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config(); // Load env variables
const port = process.env.PORT || 5000;
const UserModel = require('./models/Users');

const app = express();

// Connect to the database
connectDb();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

app.use("/",require('./routes/userRoutes'))


// app.post("/createUser",(req,res)=>{
//     console.log("Hello world")
// })


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
