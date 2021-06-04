const express = require('express');
const router = express.Router();
const ModelMongo = require("../modelTodo");
router.get('/',(req,res) => {
    ModelMongo.HabitModel.find({

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
    ModelMongo.HabitModel.findOne({
     
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