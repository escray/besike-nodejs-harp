var createMiniHarp = require("./");

var app = createMiniHarp();
console.log("Starting mini-harp on http://localhost:4000");
app.listen(4000);

