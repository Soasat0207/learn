const express = require('express');
const router = express.Router();
const ModelMongo = require("../modelTodo");
router.get('/',(req,res) => {
    ModelMongo.UserModel.find({

    })
    .then((data)=>{
        res.json(data)
        console.log(data);
    })
    .catch((err)=>{
        res.status(500).json('loi sever')
        console.error(err);
    })
})
router.post('/',(req,res) => {
    console.log(26,req.body);
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const status = req.body.status;
    ModelMongo.UserModel.find({
    //    username : username,
    //    password : password,
    })
    .then((data)=>{
        res.json(data)
        console.log(data);
    })
    .catch((err)=>{
        res.status(500).json('loi sever')
        console.error(err);
    })
})



module.exports = router;