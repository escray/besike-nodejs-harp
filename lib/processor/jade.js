module.exports = makeJade;
var path = require('path');
var fs = require('fs');
var jade = require('jade')

function makeJade(root) {
  return function(req, res, next) {
    if (path.extname(req.url) == '.html' ){
      var filepath = root + req.url;      
      if(fs.existsSync(filepath)) {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Content-Length', 26)
        res.end(fs.readFileSync(path, {encoding: 'utf-8'}));
      } else {
        filepath = filepath.replace('html', 'jade');
        if (fs.existsSync(filepath)) {          
         res.setHeader('Content-Type', 'text/html; charset=UTF-8');
         res.setHeader('Content-Length', 26)
         res.end(jade.renderFile(filepath));
        }
      }
    }
    next();
  }
}