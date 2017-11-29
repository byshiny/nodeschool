
function print(err, files){
  if(err) console.log(err);
  files.forEach(function (file) {
    console.log(file);
  })
}
var module = require('./module');
module(process.argv[2], process.argv[3], print)
