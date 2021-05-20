const express = require('express');
const userRoute = express.Router();
userRoute.get('/user/create', (req, res ) =>{
    res.send('hello create');
})
module.exports = userRoute;