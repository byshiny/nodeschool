var through2 = require('through2');
var concat = require('concat-stream');
var split = require('split');
var opts = { encoding: 'string' };
var str =   process.stdin
       .pipe(concat(opts, function (data, opts) {
         process.stdout.write(data.split("").reverse().join(""));
       }));
/*

process.stdout.write
   var concat = require('concat-stream');
      var http = require('http');

      var server = http.createServer(function (req, res) {
          if (req.method === 'POST') {
              req.pipe(concat(function (body) {
                  var obj = JSON.parse(body);
                  res.end(Object.keys(obj).join('\n'));
              }));
          }
          else res.end();
      });
      server.listen(5000);
*/
