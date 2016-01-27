#!/usr/local/bin/node

createMiniHarp = require("../")
var app = createMiniHarp();
var argv = require('minimist')(process.argv.slice(2));
var port = argv['port'];

if (port == undefined)
  port = 4000;

// port must be a value an positive integer less than or equal to 65535
// var integerRegex = /^\d+$/;
// var parsed = parseInt(port);
// need judge the port in used ? 
if (port > 0 && port < 65535) {
  console.log("Starting mini-harp on http://localhost:" + port);
  app.listen(port);  
}
else {
  console.log("port is invalid");
}

