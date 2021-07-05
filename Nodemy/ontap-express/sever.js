const express = require('express');
const ModelMongo = require("./router/mongodb");
const userRouter = require('./router/userRouter');
const resDeleteRouter = require('./router/resDelete_Router');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var multer  = require('multer')
const port = process.env.PORT || 3000;

// const port = 3000;
app.use(cookieParser())
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/html/index.html'));
})
app.get('/login',(req,res) =>{
    res.sendFile(path.join(__dirname,'./public/html/login.html'));
})
// tạo ra đường dẫn tĩnh
app.use('/public',express.static(path.join(__dirname, './public')));
app.use('/api/user',userRouter);
app.use('/api/resDelete',resDeleteRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})