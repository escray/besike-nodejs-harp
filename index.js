var connect = require('connect');
var serveServer = require('serve-static');
var url = require('url');
var path = require('path');
var jade = require("./lib/processor/jade.js");
var less = require("./lib/processor/less.js");

function miniharp(root) {
  //console.log(root);
  var app = connect()
    .use(function(req, res, next){
      if (url.parse(req.url).path === '/') {
        //res.write("hello: " +  path.basename(req.url));
        req.url += 'index.html';
      }
      next();
    })
    .use(function(req, res, next){
      if ( path.extname(req.url) === '.less' 
        || path.extname(req.url) === '.jade') {        
        res.statusCode = 404;
        res.end('Not Found: ' + req.url);        
      } else {
        next();
      }
    })
    .use('/current-time', function(req, res, next) {
      res.write((new Date()).toISOString());
      res.end();
      next();
    })
    .use(serveServer(root))

    .use(jade(root))
    .use(less(root));
  return app;
};

module.exports = miniharp;