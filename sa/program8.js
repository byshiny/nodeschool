var http = require('http');
var fs = require('fs');
var through2 = require('through2');
var server = http.createServer(function (req, res) {
    req.pipe(through2(function (line, _, next) {

        this.push(line.toString().toUpperCase());

      next();
    })).pipe(res);
});
server.listen(process.argv[2]);
