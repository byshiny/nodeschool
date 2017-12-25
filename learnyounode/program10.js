
var net = require('net')
var strftime = require('strftime')
    var server = net.createServer(function (socket) {


      var date = new Date()

      var timeFormatted = strftime('%F %R', date)
      socket.write(timeFormatted)
      socket.write("\n")
      socket.end()
    })
    server.listen(process.argv[2])

/*
function setHTTP(argv, num){
  http.get(argv, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString();
      httpCollection[num] = data;
      collecteddata++;

      if(collecteddata == 3){
        for(var x = 0; x < httpCollection.length; x++){
          console.log(httpCollection[x]);
        }
      }
    }))
  });

}

var http = require('http');
var bl = require('bl')
var collecteddata = 0;
httpCollection = new Array(3);
/*
var writables.push(concat(collect));
var writables.push(concat(collect));
var writables.push(concat(collect));
var myMap = new Map();
myMap.set(process.argv[2], concat(collect);
myMap.set(process.argv[3], concat(collect);
myMap.set(process.argv[4], concat(collect);

setHTTP(process.argv[2], 0);
setHTTP(process.argv[3], 1);
setHTTP(process.argv[4], 2);

*/
