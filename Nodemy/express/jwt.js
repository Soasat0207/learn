var jwt = require('jsonwebtoken');
var data = {
    username:'hiep',
    password:'12123123'
}
var token = jwt.sign(data, '123123');
console.log(token);
