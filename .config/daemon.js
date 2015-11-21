var nodemon = require('nodemon');
var path = require('path');

var daemon = nodemon({
  script: path.join(__dirname, './server.js'),
  watch: path.join(__dirname, '../api')
});

daemon.once('exit', function() {
  process.exit();
});