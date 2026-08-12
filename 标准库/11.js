var currentIndex = 1;
var img = document.querySelector("img");

setInterval(function () {
  currentIndex++;
  if (currentIndex === 5) {
    currentIndex = 1;
  }

  // currentIndex = (currentIndex % 4) + 1;
  img.src = "image" + currentIndex + ".jpg";
}, 1000);
