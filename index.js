connect = require('connect');

function miniharp() {
  console.log("miniharp");
  var app = connect();
  return app;
};

module.exports = miniharp;