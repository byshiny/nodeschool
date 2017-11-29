var fs = require('fs');
var fileBuffer = fs.readdir(process.argv[2], 'utf8', function listFiles(err, list){
  for(var x = 0; x < list.length; x++){
    if(list[x].indexOf("."+process.argv[3]) != -1){
      console.log(list[x]);
    }
  }

});
