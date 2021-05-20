const express = require('express');
const path = require('path');
const userRouter = require('./userRouter');
const baiTap1Router = require('./public/js/router/baiTap1Router');
const baiTap2Router = require('./public/js/router/baiTap2Router.js')
const app = express();
const port = 3000;


// app.get('/', (req, res) => {
//   res.send('Hello Worlds!')
// })
// tạo ra 1 đường dẫn tới file index.html 
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
})
app.get('/login',(req,res) =>{
  res.sendFile(path.join(__dirname,'./public/html/login.html'))
})
app.get('/download',(req,res) =>{
  res.download(path.join(__dirname,'./public/img/Screen Shot 2021-05-19 at 09.19.11.png'))
})
//tạo 1 đường dẫn tĩnh đến file public gòn những file html css js để dùng trên server 
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use('/api/',userRouter)
app.use('/nodemy/',baiTap1Router);
app.use('/nodemy/',baiTap2Router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})