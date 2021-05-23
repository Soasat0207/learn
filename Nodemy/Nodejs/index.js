var fs = require('fs');
var path = require('path');
// for(let i = 0; i <10;i++){
//     fs.appendFile('./note.txt',`\nhello lần thứ ${i}`,'utf-8',function(err){
//         console.log(err)
//       })
// }
// fs.readFile('./note.txt','utf-8',function(err,data){
//     if(!err){
//         console.log(data)
//     }
// })
// fs.rmdir('test',{recursive:true},function(err){
//     console.log(err);
// })
var link = path.join(__dirname, '../');
console.log(link);
