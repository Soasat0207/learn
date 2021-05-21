const express = require('express');
const bai2 = express.Router();
bai2.get('/bai2',(req, res)=>{
    res.send('da laf bai 2');
});
module.exports = bai2;