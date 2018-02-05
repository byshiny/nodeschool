function repeat(operation, num) {
  for(var x = 0; x < num; x++){
    operation(num)
  }
}

// Do not remove the line below
module.exports = repeat
