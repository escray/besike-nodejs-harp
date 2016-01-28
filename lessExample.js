var less = require('less');
var lessStr = '.class { width: (1+1)}';
less.render(lessStr, function(e, output) {
  console.log(output.css);
});

console.log(less.render(lessStr));