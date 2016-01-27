// http://jade-lang.com/api/

var jade = require('jade');
var fs = require('fs');

var strJade = 'string of jade';

var fn = jade.compile(strJade);

//var html = fn(local);
console.log(fn());

var cf = jade.compileFile('template.jade');
console.log(cf());

var cc = jade.compileClient(strJade);
console.log(cc);


console.log(jade.render(strJade));

console.log(jade.renderFile('template.jade'));

var jsFunctionString = jade.compileFileClient('temp.jade', {name: "fancyTemplateFun"});
fs.writeFileSync("temp.js", jsFunctionString);