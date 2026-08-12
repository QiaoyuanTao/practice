var ball = document.querySelector(".ball");

var disX = 4;
var disY = 4;

var ew = ball.clientWidth;
var eh = ball.clientHeight;

var screenW = document.documentElement.clientWidth;
var screenH = document.documentElement.clientHeight;

var maxLeft = screenW - ew;
var maxTop = screenH - eh;

function createRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  var r = createRandom(0, 256);
  var g = createRandom(0, 256);
  var b = createRandom(0, 256);
  ball.style.background = "rgb(" + r + "," + g + "," + b + ")";
}

setInterval(function () {
  var rect = ball.getBoundingClientRect();
  var x = rect.left;
  var y = rect.top;

  var left = x + disX;
  var top = y + disY;

  if (left > maxLeft) {
    disX = -disX;
    randomColor();
  }
  if (left < 0) {
    disX = -disX;
    randomColor();
  }

  if (top > maxTop) {
    top = maxTop;
    disY = -disY;
    randomColor();
  }
  if (top < 0) {
    top = 0;
    disY = -disY;
    randomColor();
  }

  ball.style.left = left + "px";
  ball.style.top = top + "px";
}, 20);
