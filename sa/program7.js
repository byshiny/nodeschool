var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    fs.createReadStream('file.txt').pipe(res);
});
server.listen(process.argv[2]);
