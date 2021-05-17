let fs = require('fs');
let writedemo = fs.createWriteStream('./demo.txt');
let writenewfile = fs.createWriteStream('./newFile.txt');

writedemo.write('Chúc mừng bạn đã ghi file thành công');



fs.writeFile('./newFile.txt',data,function(err){
    if(err){
        console.log(err)
    }
    else{
        let read = fs.createReadStream('./newFile.txt','utf8');
        read.pipe(writedemo);
    }
}); 