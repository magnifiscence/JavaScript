var http = require('http')

http.createServer(function(req, res){
    res.writeHead({'Content-Type':'text/html'})
    res.end("Welcome Back Alien!!!")


}).listen(8080)