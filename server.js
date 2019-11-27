var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type" : "application/json",
            "Access-Control-Allow-Origin":  "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" });

        var readable = fs.createReadStream(`./src/${req.url}`);
        readable.pipe(res);
    } else if (req.method === "POST") {

        var body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
    console.log(req.url);
});
server.listen(5000);
