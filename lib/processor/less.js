module.exports = makeLess;

var less = require('less');
var path = require('path');
var fs = require('fs');

function makeLess(root) {
  return function(req, res, next){
    var csspath = root + req.url;
    if (path.extname(req.url) === '.css' ) {
      
      if (fs.existsSync(csspath)) {
         res.setHeader('ContentType', 'text/text; charset=UTF-8');
         res.end(fs.readFileSync(csspath));
      } else {
        var lesspath = csspath.replace('css', 'less');
        
        if (fs.existsSync(lesspath))
        {
          less.render(fs.readFileSync(lesspath, {encoding: 'utf-8' }), 
            function(e, output) {
              fs.writeFileSync(csspath, output.css, {encoding: 'utf-8'});
              res.setHeader('ContentType', 'text/html; charset=UTF-8');
              res.end(fs.readFileSync(csspath));
            });
        }
      }
    } 
    next();
  }
}