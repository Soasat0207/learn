const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const ModelTodo = require('./modelTodo');
const UserRouter = require('./router/userRouter')
const HabitRouter = require('./router/habitTrackerRouter')
const port = 3000;
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './main.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/login.html'))
});
app.use('/public',express.static(path.join(__dirname,'./public')));
app.use('/api/user/', UserRouter);
app.use('/api/habitTracker/', HabitRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})