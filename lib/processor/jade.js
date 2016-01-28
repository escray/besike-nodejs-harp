module.exports = makeJade;
var path = require('path');
var fs = require('fs');
var jade = require('jade')

function makeJade(root) {
  return function(req, res, next) {
    if (path.extname(req.url) == '.html' ){
      var filepath = root + req.url;      
      if(fs.existsSync(filepath)) {      
        data = fs.readFileSync(path, {encoding: 'utf-8'});
        resWrite(res, data);
      } else {
        var jadepath = filepath.replace('html', 'jade');
        if (fs.existsSync(jadepath)) {          
         data = jade.renderFile(jadepath);
         resWrite(res, data);
        } else {
          res.statusCode = 404;
          res.end();
        }
      }
    }  
    else {
      next();
    }   
  }
}

function resWrite(res, data) {
  res.setHeader("Content-Type", 'text/html; charset=UTF-8');
  res.setHeader("Content-Length", data.length);
  res.end(data);
}