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
// router.post('/',(req,res) => {
//     console.log(26,req.body);
//     const username = req.body.dataUsername;
//     const password = req.body.dataPassword;
//     const email = req.body.dataEmail;
//     const status = req.body.status;
//     console.log(password)
//     console.log(email)
//     ModelMongo.UserModel.findOne({
//         email : email,
//         password : password,
//     })
//     .then((data)=>{
//         console.log(data);
//         if (data) {
//             res.json(true);
//         } else {
//             res.status(400).json('dang nhap that bai');
//             console.log('err')
//         }
//     })
//     .catch((err)=>{
//         res.status(500).json('loi sever')
//         console.error(err);
//     })
// })
router.post('/',(req,res) => {
    const username = req.body.dataUsername;
    const password = req.body.dataPassword;
    const email = req.body.dataEmail;
    const status = req.body.status;
    ModelMongo.UserModel.create({
        username:username,
        email : email,
        password : password,
    })
    .then((data)=>{
        console.log(data);
        if (data) {
            res.json(true);
        } else {
            res.status(400).json('dang nhap that bai');
            console.log('err')
        }
    })
    .catch((err)=>{
        res.status(500).json('loi sever')
        console.error(err);
    })
})



module.exports = router;