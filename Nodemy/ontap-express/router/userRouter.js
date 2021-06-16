const express = require('express');
const router = express.Router();
const ModelMongo = require("../router/mongodb");
// lất dữ liệu từ db
router.get('/',(req,res) =>{
    ModelMongo.userModel.find({

    })
    .then((data) =>{
        res.json(data)
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.post('/',(req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role
    ModelMongo.userModel.create({
        username: username,
        password: password,
        role:role,
    })
    .then((data) =>{
        res.json({data:data,status:200})
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.put('/',(req,res) =>{
    let id = req.body.id
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    ModelMongo.userModel.findOneAndUpdate({
        _id:id,
    },{
        username: username,
        password:password,
        role:role,
    })
    .then((data) =>{
        res.json({data:data,status:200})
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.delete('/',(req,res) =>{
    let id = req.body.id;
    ModelMongo.userModel.findOneAndDelete({
        _id:id,
    })
    .then((data) =>{
        res.json({data:data,status:200})
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
module.exports = router