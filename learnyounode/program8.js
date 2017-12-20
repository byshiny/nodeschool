
function callback(response){
  var data = {};
  response.setEncoding('utf8');
  response.on("data", function(data)
  {
    charcount += data.length;
    writable.write(data);
  });
  response.on("end", function(data)
  {
    writable.end();
  });

}

function collect(data){
  console.log(charcount);
  console.log(data);
}
var http = require('http');
var concat = require('concat-stream');
var writable = concat(collect);
var charcount = 0;
http.get(process.argv[2], callback);

/*
bl solution to review later


    var http = require('http')
    var bl = require('bl')


    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })

    */
