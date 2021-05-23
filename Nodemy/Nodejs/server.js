 var http = require('http');
//  tạo ra một con server 
var server = http.createServer(function(request, response){
    response.write('hello');
    response.end();
}) 
// tạo ra 1 cổng 
server.listen(3000);