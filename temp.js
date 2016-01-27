function fancyTemplateFun(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;
var locals_for_with = (locals || {});

(function (author) {
  buf.push("<h1>This is a Jade template</h1><h2>By " 
    + (jade.escape((jade_interp = author) == null ? '' : jade_interp)) 
    + "</h2>");
}.call(this,"author" in locals_for_with?
  locals_for_with.author:typeof author!=="undefined"?
  author:undefined)
);
;
  return buf.join("");
}