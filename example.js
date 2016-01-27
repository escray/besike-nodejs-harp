var connect = require("connect");
var j = require("./lib/processor/jade")
var root = __dirname + "/verify/assets"
jade = connect().use(require("./lib/processor/jade")(root));//.use(require("lib/processor/jade.js")(root));

