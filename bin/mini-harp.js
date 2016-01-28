#!/usr/local/bin/node

createMiniHarp = require("../")
var app = createMiniHarp(process.cwd());
var argv = require('minimist')(process.argv.slice(2));
var port = argv['port'];
var jade = require('../lib/processor/jade.js');

//console.log(argv['_'][0]);
var indexjade = argv['_'][0];

var serveStatic = require('serve-static');

if (port == undefined)
  port = 4000;

// port must be a value an positive integer less than or equal to 65535
// var integerRegex = /^\d+$/;
// var parsed = parseInt(port);
// need judge the port in used ? 
if (port > 0 && port < 65535) {
  console.log("Starting mini-harp on http://localhost:" + port);

  app
  .use(jade(indexjade))   
  .listen(port);  
}
else {
  console.log("port is invalid");
}

