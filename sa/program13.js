var combine = require('stream-combiner');
var t2 = require('through2');
var split = require('split');
var zlib = require('zlib');
module.exports = function() {

  //define a new stream here
  var Readable = require('stream').Readable;
  var stream = new Readable({
    objectMode: true
  });

  var mappy = {};
  var count = 0;
  var t2inst = t2.obj(function(obj, enc, callback) {
    //console.log(ticker + obj);
    obj = JSON.parse(obj);

    if (obj.type == "genre") {
      if (count > 1) {
        //mappy.books.sort();
        t2inst.push(JSON.stringify(mappy) + '\n');
      }
      mappy.name = obj.name;
      mappy.books = [];
    } else {
      mappy.books.push(obj.name);
    }
    count++;
    //this.push(chunk);
    callback();
  }, function(cb) {
    //smappy.books.sort();
    t2inst.push(JSON.stringify(mappy) + '\n');
    cb();
  });
  return combine(
    split(null, null, {
      trailing: false
    }), t2inst, zlib.createGzip()
  );

}
/* NOTES
CHECK NEW LINE CHARACTER
CALL CALLBACK AFTER DONE
SPLIT IS CALLED TO REMOVE NEW LINES
OMG THIS TOOK MUCH LONGER THAN EXPECTED Q.Q
TAKE CARE IN PASSING OBJS
// Here's the reference solution:

  var combine = require('stream-combiner');
  var through = require('through2');
  var split = require('split');
  var zlib = require('zlib');

  module.exports = function () {
      var grouper = through(write, end);
      var current;

      function write (line, _, next) {
          if (line.length === 0) return next();
          var row = JSON.parse(line);

          if (row.type === 'genre') {
              if (current) {
                  this.push(JSON.stringify(current) + '\n');
              }
              current = { name: row.name, books: [] };
          }
          else if (row.type === 'book') {
              current.books.push(row.name);
          }
          next();
      }
      function end (next) {
          if (current) {
              this.push(JSON.stringify(current) + '\n');
          }
          next();
      }

      return combine(split(), grouper, zlib.createGzip());
  };
