var sys = require('util'),
	http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<h1>Hello World!</h1>")
	res.end("<h2>This is the end!</h2>");
}).listen(3000, "127.0.0.1");

console.log("Server running at http://127.0.0.1:3000/");
