connect = require('connect');
serveServer = require('serve-static');
jade = require("./lib/processor/jade.js");
less = require("./lib/processor/less.js");

function miniharp(root) {
  //console.log(root);
  var app = connect()
    .use(serveServer(root))
    .use(jade(root))
    .use(less(root));
  return app;
};

module.exports = miniharp;