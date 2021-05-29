const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/K11_Nodemy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const AccountSchema = new Schema({
    username:String,
    password:String,
    age:Number,
    salary:Number,
    course:{
        type:String,
        ref:'course',
    },
},{
    collection:'Account'
});
const CourseSchema = new Schema({
    name:String,
    teacher:String,
    lesson:[],
    salary:{
        type:String,
        ref:'Account',
    },
},{
    collection:"course",
});
const AccountModel = mongoose.model('Account',AccountSchema);
const CourseModel = mongoose.model('course',CourseSchema);

// AccountModel.create({
//     username:'Huy Hiep',
//     password:'123123',
//     age:20,
//     salary:0,
// })
// .then((data)=>{
//     console.log(data)
// })
// CourseModel.create({
//     name:'html',
//     teacher:'Son dang',
// })
// AccountModel.findOneAndUpdate({
//     _id:'60aec85d2dc8dd08f8ed2f86'
// },{
//     course:'60aec85d2dc8dd08f8ed2f87'
// })
// .then((data)=>{
// console.log(data);
// })
// .catch( (error)=>{
//     console.log(error);
// })
AccountModel.find({
    _id:'60aec85d2dc8dd08f8ed2f86'
})
.populate('course')
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
CourseModel.findOneAndUpdate({
    _id:'60aec85d2dc8dd08f8ed2f87'
},)
// .populate('course')
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})