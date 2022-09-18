const http = require("http");
const path= require("path");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(path.parse(__filename)['name']);
    res.write('<br>');
    res.write(path.parse(__filename)['ext']);
    res.write('<br>');
    res.write(path.parse(__filename)['base']);
    res.end();
}).listen(8080);