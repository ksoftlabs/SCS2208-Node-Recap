const http = require("http");
const day=require("./whatsthedate");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Today is "+day.d);
    res.end();
}).listen(8080);