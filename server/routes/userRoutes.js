const {createUser,getUsers,getUser, updateUser,deleteUser}= require('../controller/userController')
const express = require("express");
const router = express.Router();
const UserModel = require('../models/Users')
router.post("/createUser",createUser)

router.get('/',getUsers)
router.get('/getUser/:id',getUser)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)

module.exports = router;


