var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var fileString = fileBuffer.toString();
var newLines = fileString.split('\n');
console.log(newLines.length - 1);
