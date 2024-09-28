const UserModel = require("../models/Users");
const createUser = (req,res)=>{
    console.log("success vayo hai");
    UserModel.create(req.body)
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

const getUsers = (req,res)=>{
    UserModel.find({})
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

const getUser = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    UserModel.findById({_id:id})
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}

const updateUser = (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email, age:req.body.age})
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}
const deleteUser = (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then((user)=>res.json(user))
    .catch((err)=>res.json(err))
}
module.exports = {createUser,getUsers,getUser,updateUser,deleteUser}