
const filerFunction = require('./function.js');
// console.log(filerFunction);

// console.log(filerFunction.phepcong(10,20));
// console.log(filerFunction.pheptru(10,20));
// console.log(filerFunction.phepnhan(10,20));
// console.log(filerFunction.phepchia(10,20));
const path = require('path');
// __dirname :trả về đường dẫn mà folder hiện tại mình đang ở
// path.join : ghép đường dẫn folder hiện tại mới ./tên file 
let link = path.join(__dirname,'./function.js')
let fs = require('fs');
let data = filerFunction.toString();
fs.writeFile('./test.txt',data,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('ok')
    }
});  
fs.readFile('./test.txt','utf8',function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});  
fs.appendFile('./function.js',`;console.log("hello world")`,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('ok')
    }
});
fs.unlink('./test.txt',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('ok')
    }
});
let write = fs.createWriteStream('./text.txt');
write.write('ok');
let read = fs.createReadStream('./function.js','utf8');
read.pipe(write)
