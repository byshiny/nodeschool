var ws = require('websocket-stream');
var stream = ws('http://localhost:8099');
//stream.write("hello\n");
//stream.write("There's a place I know just east of here.");
stream.end('Hello\n');
