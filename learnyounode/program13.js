var fs = require('fs')
var http = require('http')
var url = require('url')
var map = require('through2-map')

var server = http.createServer(function(req, res) {
      if (req.method == 'POST') {
        res.end('send me a GET')
        }
      else{

        var urlObj = url.parse(req.url, true)

        console.log(urlObj)

        if(pathname == '/api/parsetime'){



        }


      }
      })

    server.listen(process.argv[2])

    /* notes:


      url.parse(request.url, true)

    add this method:

    res.writeHead(200, { 'Content-Type': 'application/json' })

    if (req.method !== 'POST') {
    return res.end('send me a POST\n')
    }

    */
