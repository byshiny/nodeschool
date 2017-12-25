
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res){

  var readStream = fs.createReadStream(process.argv[3])
  readStream.pipe(res)
  readStream.on('error', function(err) {
    res.end(err);
  })

})

server.listen(process.argv[2])

/* notes:

//remember to write the content head of the response
res.writeHead(200, { 'content-type': 'text/plain' })

*/
