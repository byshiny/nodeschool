var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
//stream.write("hello\n");
//stream.write("There's a place I know just east of here.");
stream.end('hello\n');

//DO NOT REPLACE ws with http!!!!
