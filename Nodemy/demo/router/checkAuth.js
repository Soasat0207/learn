const ModelMongo = require("../router/mongodb");
const jwt = require('jsonwebtoken');
function checkcookie (req,res,next){
    let token = req.cookies.token;
    token = jwt.verify(token,"mk");
    ModelMongo.userModel.findOne({
        $and: [
             { _id:token._id },
         ]
    })
    .then((data) =>{
        next();
    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
}
function checkadmin (req,res,next){
    let token = req.cookies.token;
    token = jwt.verify(token,"mk");
    ModelMongo.userModel.findOne({
        $and: [
             { _id:token._id },
         ]
    })
    .then((data) =>{
        console.log(data)
        if(data.role == 'admin'){
            next()
        }

    })
    .catch((error)=>{
        res.status(500).json('loi sever')
    })
}
module.exports ={checkcookie,checkadmin}