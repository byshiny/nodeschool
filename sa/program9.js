var ws = require('websocket-stream');
<<<<<<< HEAD
var stream = ws('http://localhost:8099');
//stream.write("hello\n");
//stream.write("There's a place I know just east of here.");
stream.end('Hello\n');
=======
var stream = ws('ws://localhost:8099');
//stream.write("hello\n");
//stream.write("There's a place I know just east of here.");
stream.end('hello\n');

//DO NOT REPLACE ws with http!!!!
>>>>>>> d3f71a2eac74404db54468893e61104dfabf186d
