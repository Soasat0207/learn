var tool = require('./tool.js')
var path = require('path');
var api = path.join(__dirname,'index.js')
console.log(api)
var ketqua = tool(10,20);
console.log(ketqua);
var lodash = require('lodash')
var test = lodash.chunk([1,2,3,4,5,6,7],3);
console.log(test);

