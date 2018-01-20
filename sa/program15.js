var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
    var parser = tar.Parse();
    parser.on('entry', function (e) {
      console.log('herro');
        //console.dir(e);
    });
    //fs.createReadStream('file.tar').

/*
    var t2 = t2.obj(function(obj, enc, callback) {
      //console.log(ticker + obj);
      obj = JSON.parse(obj);
      var retStr = entry.type + entry.path
      console.log(obj);
      callback();
    }, function(cb) {
      //smappy.books.sort();
      t2inst.push(JSON.stringify(mappy) + '\n');
      cb();
    });*/

    var cryptoStream = crypto.createDecipher(process.argv[2], process.argv[3]);
    process.stdin.pipe(cryptoStream).pipe(zlib.createGunzip()).pipe(parser);
