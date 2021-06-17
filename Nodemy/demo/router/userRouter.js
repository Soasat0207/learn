const express = require('express');
const router = express.Router();
const ModelMongo = require("../router/mongodb");
const jwt = require('jsonwebtoken');
const checkAuth = require('./checkAuth')
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
router.post('/',checkAuth.checkadmin,(req,res,next)=>{
    let username = req.body.username;
    ModelMongo.userModel.find({
        username:username
    })
    .then((data)=>{
        if(data.length == 0 ){
            next();               
        }
        else{
            res.json({
                message:'tài khoản đã tồn tại',
            }) 
        }
    })
    .catch((error)=>{
        console.log(error)
    })
}
,(req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    ModelMongo.userModel.create({
        username: username,
        password: password,
        role:role,
    })
    .then((data) =>{
        return res.json({
            message:'susses',
            status:200,
            data:data,
        })
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.post('/find',checkAuth.checkcookie,(req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    ModelMongo.userModel.find({
        $or: [
            { username: username },
            { role: role }
         ]
    })
    .then((data) =>{

        res.json(data)
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.post('/check',(req,res) =>{
    let username = req.body.username;
    let password = req.body.password;
    let role = req.body.role;
    ModelMongo.userModel.findOne({
        $and: [
             { username: username },
            { password: password }
         ]
    })
    .then((data) =>{
        if (data){
            var token = jwt.sign({_id:data._id,},'mk')
            return res.json({
                token:token,
                data:data,
              });
            
          }
        else {
            res.status(400).json('dang nhap that bai');
        }
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.post('/checkcookie',(req,res,next)=>{
    let token = req.cookies.token;
    token = jwt.verify(token,"mk");
    ModelMongo.userModel.findOne({
        $and: [
             { _id:token._id },
         ]
    })
    .then((data) =>{
        res.json(data)
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
});
router.put('/',checkAuth.checkcookie,checkAuth.checkadmin,(req,res) =>{
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
router.delete('/',checkAuth.checkcookie,checkAuth.checkadmin,(req,res) =>{
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