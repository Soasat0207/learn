const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/K11_Nodemy',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true,
});
const AccountSchema = new Schema({
    username:String,
    password:String,
    email:String,
    idPost: [{
        type:String,
        ref:'port'
    }]
},{
    collection:'Account'
});
const PortSchema = new Schema({
    title:String,
    comment:String,
    author: String,
    idComment:[{
        type:String,
        ref:"comment"
    }]
},{
    collection:'port'
});
const CommentSchema = new Schema({
    content:String,
    idAccount: {
        type:String,
        ref:'Account'
    }
},{
    collection: "comment"
})
const AccountModel = mongoose.model('Account',AccountSchema);
const PostModel = mongoose.model('port',PortSchema);
const CommentModel = mongoose.model('comment',CommentSchema);
// AccountModel.create({
//     username: 'lehuyhiep',
//     password: '123123',
//     email: 'lehuyhiep449@gmail.com'
// }),
// PortModel.create({
//     title: 'Hoc mongodb',
//     comment: 'fightting',
//     author: 'Hiep'
// })
// CommentModel.create({
//     content: 'cố lên bạn ơi mình tin bạn lam được!'
// })
// AccountModel.findOneAndUpdate({
//     _id:'60b2112598c6e365735fe22a',
// },{
//     idPost:[
//         '60b2112598c6e365735fe22b',
//     ]
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// PostModel.findOneAndUpdate({
//     _id:'60b2112598c6e365735fe22b',
// },{
//     idComment:[
//         '60b2112598c6e365735fe22c',
//     ]
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
// CommentModel.findOneAndUpdate({
//     _id:'60b2112598c6e365735fe22c',
// },{
//     idAccount:'60b2112598c6e365735fe22a'
    
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
PostModel.find({
    _id:'60b2112598c6e365735fe22b',
})
.populate('comment')
// .populate('idAccount')
.then((data)=>{
    console.log(data[0]);
})
.catch((error)=>{
    console.log(error);
})