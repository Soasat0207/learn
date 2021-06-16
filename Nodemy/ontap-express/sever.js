const express = require('express');
const ModelMongo = require("./router/mongodb");
const userRouter = require('./router/userRouter');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const port = 3000;
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
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})