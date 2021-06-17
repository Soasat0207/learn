const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/ontap-express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
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
//     username:'user',
//     password:'user',
//     role:'user',
// })
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