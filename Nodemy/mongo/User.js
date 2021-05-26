const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/K11Mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email:String,
    age: Number,
    school:String,
    blog:{
        type:String, 
        ref:'PostBlog'
    }
}, {
    collection: 'user'
})

const UserMondel = mongoose.model('user', UserSchema);
module.exports = UserMondel;
// UserMondel.aggregate([
//     {   

//             $match : {  age:{ $lte:20 }},
//         // $count:'total'

        
//     }
// ])
// .then((data) =>{
//     console.log(data)
// })
// .catch((err) =>{
//     console.error(err)
// })
// UserMondel.create({
//     username:'Test 1',
//     password:"123123",
//     age:13,
//     email:'test5@gmail.com',
//     school:'NEU',
//     blog:'60adca97c7224237a30f2dc7',
// },
// )
// UserMondel.deleteMany({

// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// UserMondel.findOne({
//     username:"My"
// })
// .then((data) =>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// UserMondel.find({
// }).limit(3)
// .then((data) =>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// UserMondel.create({
//     username:'Hiep',
//     password:"123",
//     age:25,
// })
// UserMondel.find({
//     // username : 'Hiep',
//     age : 25
// })
// .then((data) => {
//     console.log(data)
//     if (data.length != 0) {
//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i].username)
//         }
//     }
//     else{
//         console.log(false)
//     }
// })
// .catch((err) => {
//     console.log(err);
// })
// UserMondel.findOne({
//     age:25
// })
// .then((data) =>{
//     if(data != null){
//         console.log(data)
//     }
//     else{
//         console.log(false)
//     }

// })
// .catch((err) => {
//     console.log(err)
// })
// UserMondel.findOneAndDelete({
//     age:25
// })
// .then((data) =>{
//     console.log(data)   
// })
// .catch((err) => {
//     console.log(err)
// })
// UserMondel.count({ age: 25 })
//   .then(numDocs => console.log(`${numDocs} documents match the specified query.`))
//   .catch(err => console.error("Failed to count documents: ", err))
// UserMondel.findOneAndUpdate({ username:'Hiep'},{username:'My'})
// .then((data)=>{
//     console.log(data)
// })
// .catch((err) => console.error)
// UserMondel.find({
// }).sort({age:-1}).limit(5)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err) => console.error)

// UserMondel.find({
// }).skip(3)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err) => console.error)

// UserMondel.create({
//     username:'Son',
//     password:'123123',
//     age:18
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })
// UserMondel.deleteOne({
//     username:'Son',
//     password:123123
// })
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// })

// UserMondel.find({
//     //tuổi lớn hơn 20 và nhỏ hơn 30 không có chứa user name là hiệp 
//     $and: [ 
//         {age:{ $gte:20 }},
//         {age:{ $lte:30 }},
//         {username:{ $not:{ $regex: /hiep/i } }}
//         ] ,
    
    
// })
// .then((data)=>{
//     // tính tổng của số tuổi 
//     var total = 0 
//     for(let i = 0;i<data.length;i++){
//         total += data[i].age;
//     }
//     console.log(data.length)
//     console.log(`tổng tuổi là `+total)
//     console.log(`trung bình  tuổi là `+(total / data.length))
// })
// .catch((error)=>{
//     console.log(error)
// })


