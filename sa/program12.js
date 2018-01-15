var duplexer2 = require('duplexer2');
var stream = require('stream');
var through = require('through2');
module.exports = function (counter) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
  var readable = new stream.Readable();
   var writable = new stream.Writable({objectMode: true});
   writable._write = function _write(input, encoding, done) {
     console.log("HELP!" + JSON.stringify(input));

     if (readable.push(input)) {
       return done();
     } else {
       readable.once("drain", done);
     }
   };

   readable._read = function _read(n) {
     // no-op
   };


    var dup = duplexer2({writableObjectMode: true}, writable, counter);


/*
    counter.on('data', function(chunk){

      //console.log(chunk);

    }).on('end', function(){
      //sStream.end();
    });
*/
var map = {};
counter.setCounts(map);
return dup;
};

//derp swapped the inputs and outputs. Think carefully next time!
