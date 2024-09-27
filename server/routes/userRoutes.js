const express = require("express");
const router = express.Router();
const UserModel = require('../models/Users')
router.post("/createUser", (req, res) => {
     UserModel.create(req.body)
     .then(users => res.json(users))
     .catch(err=> res.json(err))
     console.log("Hello world");
});

router.get("/",(req,res)=>{
     UserModel.find({})
     .then(users=>res.json(users))
     .catch(err=>res.json(err))
})

module.exports = router;
