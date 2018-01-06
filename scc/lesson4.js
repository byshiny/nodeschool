function foo(){
  var bar = 3;
  quux = 5;
  function zip(){
    var quux = 3;
        bar = true;
  }
  return zip;
}
