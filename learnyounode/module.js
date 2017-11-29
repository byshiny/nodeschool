var fs = require('fs')
var path = require('path')

var doWork = function (dirName, ext, callback){
  var folder = dirName
  var ext = '.' + ext

  fs.readdir(dirName, function (err, files) {
    if (err) return callback(err)
    var array = [];
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        array.push(file);
      }
    })
    callback(null, array)
  })
}
module.exports = doWork
