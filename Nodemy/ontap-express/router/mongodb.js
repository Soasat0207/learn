const mongoose = require('../connectDB');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb+srv://lehuyhiep449:Dothithuhang1010@cluster0.h6ust.mongodb.net/ontap-express?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
const userSchema = new Schema({
    username:String,
    password:String,
    role:String    
},{
    collection:'user'
});
const requestDeleteSchema = new Schema({
  idUserRequest: {
    type:String,
    ref:'user'
  },
  idUserDelete: {
    type:String,
    ref:'user'
  },
   
},{
  collection:'requestDelete'
});
const userModel = new mongoose.model('user',userSchema);
const requestDeleteModel = new mongoose.model('requestDelete',requestDeleteSchema);
module.exports ={userModel,requestDeleteModel};
// userModel.create({
//     username:'admin',
//     password:'admin',
//     role:'admin',
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// });

// requestDeleteModel.create({
//   idUserRequest:'60c976e663a22eff4d87e43f',
//   idUserDelete:'60c980d1b7a32a0a57e3589c',
// })
// requestDeleteModel.find({
  
// })
// .populate({
//   path:'idUserRequest',
// })
// .populate({
//   path:'idUserDelete',
// })
// .then((data) => {
//   console.log(data)
// })
// .catch((err) => {
//   console.log(err);
// })