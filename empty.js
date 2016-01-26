connect = require('connect');

temp =  {};

temp.inside = function(port) {
    app = connect();
    console.log("Starting http server on http://localhost:4000");
    app.listen(port);
  }
}
//var t = temp();
temp.inside(4000);