const express = require('express');
const router = express.Router();
const ModelMongo = require("../router/mongodb");
const checkAuth = require('./checkAuth')

router.get('/',(req,res) =>{
    ModelMongo.requestDeleteModel.find({

    })
    .populate({
        path:'idUserRequest',
    })
    .populate({
        path:'idUserDelete',
    })
    .then((data) =>{
        res.json(data)
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.post('/',(req,res,next) =>{
    let idUserRequest = req.body.idUserRequest;
    let idUserDelete = req.body.idUserDelete;
    ModelMongo.requestDeleteModel.create({
        idUserRequest:idUserRequest,
        idUserDelete:idUserDelete,
    })
    .then((data) =>{
        res.json(data)
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
})
router.delete('/',checkAuth.checkcookie,checkAuth.checkadmin,(req,res)=>{
    let id = req.body.id;
    ModelMongo.requestDeleteModel.findOneAndDelete({
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