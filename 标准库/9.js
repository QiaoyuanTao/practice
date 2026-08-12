var timerId;

function start() {
  if (timerId) {
    return;
  } else {
    timerId = setInterval(function () {
      console.log(new Date().toLocaleString());
    }, 1000);
  }
}

function stop() {
  console.clear();
  clearInterval(timerId);
  timerId = null;
}
