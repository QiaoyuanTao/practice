var timerId;
var curIndex = 1;
function start() {
  if (timerId) {
    return;
  }

  timerId = setInterval(function () {
    curIndex++;
    if (curIndex === 5) {
      curIndex = 1;
    }

    var img = document.querySelector("img");
    img.src = "./img/" + curIndex + ".jpeg";
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

start();

document.querySelector("img").addEventListener("mouseenter", stop);
document.querySelector("img").addEventListener("mouseleave", start);
