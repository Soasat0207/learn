const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const ModelMongo = require("./router/mongodb");
const AccountRouter = require('./router/account');
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')
const port = 3000;
app.use(cookieParser())
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  // parse application/json
  app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/index.html'))
});
app.post('/', (req, res) => {
    ModelMongo.AccountModel.find({
        _id:'60b2112598c6e365735fe22a',
    })
    .populate('idPost')
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    })
})
app.put('/',(req,res) => {
    console.log(req.body)
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    ModelMongo.AccountModel.findOneAndUpdate({
        username:username,
    },{
        password:password,
        email:email,
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/html/login.html'));
})
app.get('/router/ajax',(req,res) => {
    res.sendFile(path.join(__dirname,'./router/ajax.js'));
})
app.get('/download',(req,res) => {
    res.download(path.join(__dirname,'./public/img/videoplayback.mp4'))
})
// create
// app.post('/api/user/create', (req, res) => {
//     console.log('ok')
//     ModelMongo.AccountModel.create({
//         username: 'admin1',
//         password: '123123',
//         email: 'admin1@gmail.com'
//     })
//     .then((data) => {
//         res.json(data);
//     })
//     .catch((err) => {
//         res.json(err);
//     })
// })

// tìm theo id 
// app.get("/api/user:id", (req, res) => {
//     let id = req.params.id;
//     console.log(req.params);
//     ModelMongo.AccountModel.findOne({
//       _id: id,
//     })
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });
// paginator
// app.get('/api/query', (req, res) => {
//     console.log(req.query)
//     const page = parseInt(req.query.page);
//     const view = parseInt(req.query.view);
//     console.log(page);
//     console.log(view);
//     ModelMongo.AccountModel.find({

//     })
//     .skip((page-1)*view)
//     .limit(view)
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err)=>{
//         res.json(err);
//     })
// })


app.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  console.log(username, password,email)
  ModelMongo.AccountModel.findOne({
    username: username,
  })
  .then((data) => {
    if (data) {
      res.json("tài khoản đã tồn tại ");
    } else {
      return ModelMongo.AccountModel.create({
        username: username,
        password: password,
        email: email,
      });
    }
  })
  .then((data) => {
    console.log(data);
    res.json("tạo tài khoản thành công");
  })
  .catch((err) => {
    res.status(500).json("tạo tài khoản thai bai");
  });
});
app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  ModelMongo.AccountModel.create({
    username: username,
    password: password,
  })
  .then((data) => {
    
      res.json({
        message:'success',
        data:data,
      });
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
app.post("/login/check", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  ModelMongo.AccountModel.findOne({
    username: username,
    password: password,
  })
  .then((data) => {
    if (data){
      var token = jwt.sign({
        _id:data._id,
      },'mk')
      return res.json({
        message:'success',
        token:token,
      });
    } else {
      res.status(400).json('dang nhap that bai');
    }
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
app.post("/login/checkcokkie", (req, res) => {
  console.log(req.body)
  let token = req.body.token;
  token = jwt.verify(token,"mk");
  console.log(token)
  ModelMongo.AccountModel.findOne({
    _id:token._id,
  })
  .then((data) => {
    res.json(data);
      
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
app.get("/login/all", (req, res) => {
  ModelMongo.AccountModel.find({
    // username: username,
    // password: password,
  })
  .then((data) => {
    // if (data){
    //   var token = jwt.sign({
    //     _id:data._id,
    //   },'mk')
    //   return res.json({
    //     message:'success',
    //     token:token,
    //   });
    // } else {
    //   res.status(400).json('dang nhap that bai');
    // }
    res.json(data);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
app.post("/login/find", (req, res) => {
  
  let username = req.body.username;
  console.log(username)
  ModelMongo.AccountModel.find({
    username: username,
    // password: password,
  })
  .then((data) => {
    // if (data){
    //   var token = jwt.sign({
    //     _id:data._id,
    //   },'mk')
    //   return res.json({
    //     message:'success',
    //     token:token,
    //   });
    // } else {
    //   res.status(400).json('dang nhap that bai');
    // }
    res.json(data);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
});
app.delete('/login/',(req,res) => {
  let id = req.body.id;
  ModelMongo.AccountModel.deleteOne({
    _id:id,
  })
  .then((data) => {
    res.json({data:data,status:200})
  })
  .catch((error) => {
    console.log(error)
  })
})
app.put('/login/',(req,res) => {
  console.log(req.body)
  let id = req.body.id;
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  ModelMongo.AccountModel.findOneAndUpdate({
    _id:id
  },{
    username:username,
    password:password,
    email:email,
  })
  .then((data) => {
    res.json({data:data,status:200});
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
})
app.get('/private/', (req, res,next) => {
  try{
    let token = req.cookies.token
    // console.log(token);
    // let token = req.params.token ;
    let result = jwt.verify(token,'mk');
    console.log(result._id);
    if(result){
      next();
    }
  }catch(error){
    return res.json('ban can phai login')
  }

},(req, res,next) =>{
  // redirect
  res.json('sucess')
})
//  tạo 1 đường dẫn tĩnh
app.use('/public',express.static(path.join(__dirname,'./public')));
app.use('/api/account/',AccountRouter) 
app.listen(port,() =>{
    console.log(`Example app listening at http://localhost:${port}`)
});



