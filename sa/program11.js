var spawn = require('child_process').spawn;
var duplexer2 = require('duplexer2');
module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
    var childP = spawn(cmd, args);
    var singleStream = duplexer2(childP.stdin, childP.stdout);
    return singleStream;
};

//derp swapped the inputs and outputs. Think carefully next time!
