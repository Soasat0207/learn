const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/Todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const UserSchema = new Schema({
    username:String, 
    password:String, 
    email:String,
    status:Number,
},{
    collection:'user',
});
const HabitSchema = new Schema({
    title:String,
    content:String,
    status:Number,
    idUser:{
        type:String,
    }
},{
    collection:'habitTracker'
}) 
const UserModel = mongoose.model('user',UserSchema);
const HabitModel = mongoose.model('habitTracker',HabitSchema);
module.exports = {UserModel,HabitModel};
// UserModel.create({
//     username:'admin',
//     password:'123123',
//     email:'admin@gmail.com',
//     status:1,
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// HabitModel.create({
//     title:'Meditation',
//     content:'Thiền  thôi nào ',
//     status:1,
//     idUser:'60b98ff61921ec245e47caaa',
// },{
//     title:'Meditation',
//     content:'Thiền  thôi nào ',
//     status:1,
//     idUser:'60b98ff61921ec245e47caaa',
// },{
//     title:'😴 7+ hours sleep',
//     content:'Nhớ ngủ đủ 8 tiếng nhé ',
//     status:1,
//     idUser:'60b98ff61921ec245e47caaa',
// },{
//     title:'Journaling',
//     content:'Nhớ ghi chép nhé  ',
//     status:1,
//     idUser:'60b98ff61921ec245e47caaa',
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })