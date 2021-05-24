const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/K11Mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const UserSchema = mongoose.Schema({
        username: String,
        password: String,
        age: Number,
    },
    {collection:'user'}
)
const UserMondel = mongoose.model('user',UserSchema);
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

UserMondel.find({
}).skip(3)
.then((data)=>{
    console.log(data)
})
.catch((err) => console.error)