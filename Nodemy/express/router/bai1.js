const express = require('express');
const bai1 = express.Router();
bai1.get('/bai1',(req, res) =>{
    res.send('da laf bai tap 1');
});
module.exports = bai1;
