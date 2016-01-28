module.exports = makeLess;

var less = require('less');
var path = require('path');
var fs = require('fs');

function makeLess(root) {
  return function(req, res, next){
    var csspath = root + req.url;
    if (path.extname(req.url) === '.css' ) {
      
      if (fs.existsSync(csspath)) {   
         data = fs.readFileSync(csspath);
         resWrite(res, data);
      } else {
        var lesspath = csspath.replace('css', 'less');
        
        if (fs.existsSync(lesspath))
        {
          less.render(fs.readFileSync(lesspath, {encoding: 'utf-8' }), 
            function(e, output) {
              fs.writeFileSync(csspath, output.css, {encoding: 'utf-8'});
              //res.setHeader('ContentType', 'text/css; charset=UTF-8');
              data = fs.readFileSync(csspath);
              resWrite(res, data);
            });
        }
      }
    } 
    next();
  }
}

function resWrite(res, data) {
  res.setHeader('ContentType', 'text/css; charset=UTF-8');
  res.setHeader('Content-Length', data.length);
  res.end(data);
}