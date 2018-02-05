var duplexer2 = require('duplexer2');
var stream = require('stream');
module.exports = function (counter) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here

    writable = new stream.Writable({objectMode: true});

    //var childP = spawn(cmd, args);
    var sStream = duplexer2(counter, writable);

    sStream.on('data', function(chunk){

      console.log(chunk.toString());

    }).on('end', function(){
      sStream.end();
    });

    return singleStream
};

//derp swapped the inputs and outputs. Think carefully next time!
