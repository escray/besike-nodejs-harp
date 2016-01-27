#!/usr/local/bin/node

createMiniHarp = require("../")
console.log(process.cwd());
var app = createMiniHarp(process.cwd());
var argv = require('minimist')(process.argv.slice(2));

var port = argv['port'];

var serveStatic = require('serve-static');

if (port == undefined)
  port = 4000;

// port must be a value an positive integer less than or equal to 65535
// var integerRegex = /^\d+$/;
// var parsed = parseInt(port);
// need judge the port in used ? 
if (port > 0 && port < 65535) {
  console.log("Starting mini-harp on http://localhost:" + port);
  app.use('/current-time', function(req, res, next) {
    res.write((new Date()).toISOString());
    res.end();
    next();
  }).listen(port);  
}
else {
  console.log("port is invalid");
}

