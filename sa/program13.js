var combine = require('stream-combiner');
var t2 = require('through2');
var split = require('split');

module.exports = function() {

    //define a new stream here
    var Readable = require('stream').Readable;
    var stream = new Readable({
      objectMode: true
    });

var mappy = {};
    var splitInstance = split({trailing:false});
    splitInstance.on('data', function(line) {

      var entry = line;
      if(entry.type == "genre"){
        mappy.name = entry.name;
        mappy.books =[];
      }
      else{
        mappy.books.push(entry.name);
      }

    });
    splitInstance.on('end', function(line) {
    });



    /*
    t2.obj(function(chunk, enc, callback) {
        console.log('copout');
        this.push(chunk);
        callback();
    })*/
    return combine(
      splitInstance, process.stdout

      // read newline-separated json,
      // group books into genres,
      // then gzip the output
    );

}



    /*
    var duplexer2 = require('duplexer2');
    var stream = require('stream');
    var through = require('through2');
    module.exports = function (counter) {
        // spawn the process and return a single stream
        // joining together the stdin and stdout here
      var readable = new stream.Readable();

      var countMap = {};
      var writable = new stream.Writable({objectMode: true});
       writable._write = function _write(input, encoding, done) {
         if(countMap[input.country] == null){
           countMap[input.country] = 1;
         }
         else{
           countMap[input.country]++;
         }
         if (readable.push(JSON.stringify(input))) {
           return done();
         } else {
           readable.once("drain", done);
         }
       };


       writable.on('finish', function() {
        // console.log(countMap);
         counter.setCounts(countMap);

       });

       readable._read = function _read(n) {
         // no-op
       };


        var dup = duplexer2({writableObjectMode: true}, writable, counter);


    return dup;
    };
    /*
    // Here's the reference solution:

      var duplexer = require('duplexer2');
      var through = require('through2').obj;

      module.exports = function (counter) {
          var counts = {};
          var input = through(write, end);
          return duplexer({objectMode: true}, input, counter);

          function write (row, _, next) {
              counts[row.country] = (counts[row.country] || 0) + 1;
              next();
          }
          function end (done) {
              counter.setCounts(counts);
              done();
          }
      };
    */
    //derp swapped the inputs and outputs. Think carefully next time!
