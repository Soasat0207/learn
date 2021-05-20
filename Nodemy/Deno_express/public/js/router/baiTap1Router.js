const express = require('express');
const baiTap1Router = express.Router();
baiTap1Router.get('/baitap1',(req, res) =>{
    res.send('Welcome bạn đến javascript bài 1')
})
module.exports = baiTap1Router;