var fs = require('fs')
var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
      if (req.method == 'POST') {
        res.end('send me a GET')
        }
      else{

        var urlObj = url.parse(req.url, true)


        res.writeHead(200, { 'Content-Type': 'application/json' })
        console.log(urlObj)
        var resMap = {}
        var date = new Date(urlObj.query.iso);
        if(urlObj.pathname == '/api/parsetime'){
          resMap.hour = date.getHours()
          resMap.minute = date.getMinutes()
          resMap.second = date.getSeconds()
        }
        if(urlObj.pathname == '/api/unixtime'){
          resMap.unixtime =  date.getTime()
        }

        var stringifiedJSON = JSON.stringify(resMap)
        res.end(stringifiedJSON);
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
