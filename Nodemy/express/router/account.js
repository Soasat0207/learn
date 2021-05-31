const express = require('express');
const router = express.Router();
const ModelMongo = require("../router/mongodb");

// lất dữ liệu từ db
router.get('/',(req, res) =>{
    ModelMongo.AccountModel.find({

    })
    .then((data) =>{
        res.json(data)
        // console.log(data);
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
        console.log(error);
    })
})
//post 
router.post('/',(req, res) =>{
    ModelMongo.AccountModel.find({
        _id:'60b2112598c6e365735fe22a',
    })
    .populate('idPost')
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    })
})
router.put('/:id',(req, res)=>{
    console.log(req.body)
    let id = req.params.id;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    ModelMongo.AccountModel.findOneAndUpdate({
        _id:id,
        username:username,
    },{
        password:password,
        email:email,
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})
router.delete('/:id',(req, res)=>{
    let  id = req.params.id;
    ModelMongo.AccountModel.deleteOne({
        _id:id
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{

    })
})


module.exports = router