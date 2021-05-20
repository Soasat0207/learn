const express = require('express');
const baiTap2Router = express.Router();
baiTap2Router.get('/baitap2',(req,res) => {
    res.send('Bai tap 2');
})
module.exports = baiTap2Router;