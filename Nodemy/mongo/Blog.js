const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserMondel = require('./User.js')
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
    user:{
        type:String,
        ref:'user'
    },
    danhsach:[
        {
            type:String,
            ref:'user'
        }
    ],
    hoadon:[{
        user:{
            type:String,
            ref:'user'
        },
        quantity:Number, 
    }]

},{
    collection: 'PostBlog'
});
const BlogPost = mongoose.model('PostBlog',BlogPostSchema);
// tạo 2 bản ghi mới 
BlogPost.create({
    content:`Phương thức "charAt"
    Sử dụng cặp ngoặc vuông và truyền vào index. Ví dụ: string[index]
    `,
    title:"Để truy cập vào một chuỗi và lấy ra giá trị qua index ta sử dụng cách nào?",
    comment:"Câu hỏi ",
    user:'60ab1f6996318f07e13ce404',
    danhsach:[
        '60ab1fc1729d48082d1c6178',
        '60ab2031943f20087927bbb3',
        '60ab244a368d0a0ba6a58f0b'
    ],
    hoadon:[
        {
        user:'60ab1f6996318f07e13ce404',
        quantity: 10
        },
        {
        user:'60ab2031943f20087927bbb3',
        quantity: 15
        },
        {
        user:'60ab244a368d0a0ba6a58f0b',
        quantity: 2
        }

    ]
})
BlogPost.find({
    _id:'60adca97c7224237a30f2dc7'
})
.populate({path:'hoadon.user',populate:{path:'blog'}})
.then((data)=>{
    console.log(data[0].hoadon[0].user)
})
.catch((err)=>{
    console.log(err)
})
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