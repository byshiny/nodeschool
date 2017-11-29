var fs = require('fs');
var fileBuffer = fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents){

  var newLines = fileContents.split('\n');
  console.log(newLines.length - 1);
});
