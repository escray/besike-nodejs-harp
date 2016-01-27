connect = require('connect');
serveServer = require('serve-static')

function miniharp(root) {
  //console.log(root);
  var app = connect()
    .use(serveServer(root));
  return app;
};

module.exports = miniharp;