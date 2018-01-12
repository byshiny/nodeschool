var through2 = require('through2');
var count = 1;
var split = require('split');
   process.stdin
       .pipe(split())
       .pipe(through2(function (line, _, next) {
         if(count % 2 == 1){
           this.push(line.toString().toLowerCase() + "\n");
         }
         else{
           this.push(line.toString().toUpperCase() + "\n");
         }
         count++;
           next();
       })).pipe(process.stdout)
   ;
