
var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet();

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();
stream.on('data', function(chunk){

  stream.write(chunk.toString().toUpperCase());

}).on('end', function(){
  stream.end();
});
tr.pipe(process.stdout);
// holy smokes this took way too long
/* SOLUTION: 

var trumpet = require('trumpet');
  var through = require('through2');
  var tr = trumpet();

  var loud = tr.select('.loud').createStream();
  loud.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  })).pipe(loud);

  process.stdin.pipe(tr).pipe(process.stdout);

*/
