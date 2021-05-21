const express = require('express');
const app = express();
const path = require('path');
const baiTap1Router = require('./router/bai1.js');
const baiTap2Router = require('./router/bai2.js')
const port = 3000;
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
});
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/login.html'));
})
app.get('/download',(req,res) => {
    res.download(path.join(__dirname,'./public/img/videoplayback.mp4'))
})
app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`)
});
//  tạo 1 đường dẫn tĩnh
app.use('/public',express.static(path.join(__dirname,'./public')));
app.use('/api',baiTap1Router);
app.use('/api',baiTap2Router);


