var container = document.querySelector("body");
var text = container.innerText;

var reg = /“[^”]+”|^\s+.+$/gm;
var newText = text.replace(reg, function (s) {
  var s = s.replace(/\s/g, "");
  return "<p>" + s + "</p>";
});
console.log(newText);

container.innerHTML = newText;
