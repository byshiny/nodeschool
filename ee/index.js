/*

var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
*/
var remote = require('electron').remote
var fs = require('fs')
var picture = require('cat-picture')
var image = require('lightning-image-poly')
var src = picture.src
picture.remove()
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
function save () {
   remote.getCurrentWebContents().printToPDF({
     portrait: true
   }, function (err, data) {
     fs.writeFile('annotation.pdf', data, function (err) {
       if (err) alert('error generating pdf! ' + err.message)
       else alert('pdf saved!')
     })
   })
 }

 window.addEventListener('keydown', function (e) {
       if (e.keyCode == 80) save()
     })
