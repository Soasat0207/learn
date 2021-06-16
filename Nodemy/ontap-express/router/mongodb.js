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
const userModel = new mongoose.model('user',userSchema);
module.exports ={userModel};
// userModel.create({
//     username:'user',
//     password:'user',
//     role:'user',
// })