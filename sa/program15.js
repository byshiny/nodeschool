var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var parser = tar.Parse();
parser.on('entry', function(entry) {
  var hashMaker = crypto.createHash('md5', {
    encoding: 'hex'
  })

  var fileContents = "";
  entry.on('data', function(tarData) {
    fileContents += tarData;
    hashMaker.update(tarData);
  });
  entry.on('end', function(tarData) {
    var hash = hashMaker.digest('hex');
    if (entry.type != 'Directory') {
      console.log(hash + " " + entry.path);
    }
  });

  //console.dir(e);
});

var cryptoStream = crypto.createDecipher(process.argv[2], process.argv[3]);
process.stdin.pipe(cryptoStream).pipe(zlib.createGunzip()).pipe(parser);

//solution:
/*  var crypto = require('crypto');
  var tar = require('tar');
  var zlib = require('zlib');
  var concat = require('concat-stream');

  var parser = tar.Parse();
  parser.on('entry', function (e) {
      if (e.type !== 'File') return;

      var h = crypto.createHash('md5', { encoding: 'hex' });
      e.pipe(h).pipe(concat(function (hash) {
          console.log(hash + ' ' + e.path);
      }));
  });

  var cipher = process.argv[2];
  var pw = process.argv[3];
  process.stdin
      .pipe(crypto.createDecipher(cipher, pw))
      .pipe(zlib.createGunzip())
      .pipe(parser)
  ;
*/
