connect = require('connect');
serveServer = require('serve-static');
jade = require("./lib/processor/jade.js");

function miniharp(root) {
  //console.log(root);
  var app = connect()
    .use(serveServer(root))
    .use(jade(root));
  return app;
};

module.exports = miniharp;