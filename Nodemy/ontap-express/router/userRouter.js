const express = require('express');
const router = express.Router();
const ModelMongo = require("../router/mongodb");
const jwt = require('jsonwebtoken');
const checkAuth = require('./checkAuth');
var multer=require('multer')
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(__dirname,'../public/upload'))
    },
    filename: function (req, file, cb) {
      let index = file.originalname.lastIndexOf('.');
      let extention = file.originalname.slice(index,file.originalname.length);
      cb(null, file.fieldname + '-' + Date.now() + extention);
    }
  })
var upload = multer({ storage: storage })
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

router.post('/checkcookie',checkAuth.checkcookie,(req,res)=>{
    console.log(req.data)
    res.json(req.data);
}
);
router.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file)
    ModelMongo.userModel.findOneAndUpdate({
        username:'admin'
    },{
        img:req.file.filename,
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })
})
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