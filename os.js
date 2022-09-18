const http = require("http");
const os= require("os");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Platform " +os.platform());
    res.write('<br>');
    res.write("Arch " +os.arch());
    res.write('<br>');
    res.write("Memory " +os.totalmem());
    res.write('<br>');
    res.end();
}).listen(8080);