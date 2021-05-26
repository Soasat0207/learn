const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/K11Mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const BlogPostSchema = new Schema({
    content:String, 
    title:String,
    comment:String,
},{
    collection: 'PostBlog'
});
const BlogPost = mongoose.model('PostBlog',BlogPostSchema);
// tạo 2 bản ghi mới 
// BlogPost.create({
//     content:`Phương thức "charAt"
//     Sử dụng cặp ngoặc vuông và truyền vào index. Ví dụ: string[index]
//     `,
//     title:"Để truy cập vào một chuỗi và lấy ra giá trị qua index ta sử dụng cách nào?",
//     comment:"Câu hỏi ",
// })

// find theo id 
// BlogPost.find({
//     _id:'60ac504bef90cd1b179af7cc'
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })
//update theo id 
// BlogPost.findOneAndUpdate({
//     _id:'60ac504bef90cd1b179af7cc'
// },{
//     content:'update thành công',
//     title:'đánh giá 4 sao'
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })