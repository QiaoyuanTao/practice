var doms = {
  // 视频元素
  video: document.querySelector("video"),
  btnPlay: document.querySelector("#btnPlay"),
  // 进度条相关元素
  progress: {
    // 进度条
    range: document.querySelector("#progress"),
    // 当前播放时间
    current: document.querySelector("#current"),
    // 总时间
    total: document.querySelector("#total"),
  },
  // 播放倍率的容器
  rate: document.querySelector("#rate"),
  // 音量相关元素
  volume: {
    // 滑动块
    range: document.querySelector("#volume input"),
    // 文本
    text: document.querySelector("#volume span"),
  },
  // 保存和设置按钮
  buttons: {
    save: document.querySelector("#save"),
    load: document.querySelector("#load"),
  },
  controls: document.querySelectorAll(".controls"),
};

doms.video.addEventListener("loadeddata", init);

function init() {
  var contols = doms.controls;
  for (let i = 0; i < contols.length; i++) {
    contols[i].style.display = "block";
  }
  setProgress();
  setRate();
  setVolume();
}

function setProgress() {
  var sec = doms.video.currentTime;
  var totalsec = doms.video.duration;
  var currentTime = formatTime(sec);
  var totalTime = formatTime(totalsec);

  doms.progress.current.textContent = currentTime;
  doms.progress.total.textContent = totalTime;
  doms.progress.range.value = Number(sec / totalsec) * 100;
}

/**
 * 格式化时间
 * @param {*} sec 秒
 * @returns '00:00:00'
 */
function formatTime(sec) {
  var hours = Math.floor(sec / 3600);
  sec -= hours * 3600;
  var mins = Math.floor(sec / 60);
  sec -= mins * 60;
  var sec = Math.floor(sec);

  var h = hours.toString().padStart(2, "0");
  var m = mins.toString().padStart(2, "0");
  var s = sec.toString().padStart(2, "0");
  return h + ":" + m + ":" + s;
}

function setRate() {
  var curRate = doms.video.playbackRate;
  var rates = doms.rate.querySelectorAll("button");
  for (let i = 0; i < rates.length; i++) {
    if (curRate === +rates[i].dataset.rate) {
      rates[i].classList.add("active");
    } else {
      rates[i].classList.remove("active");
    }
  }
}

function setVolume() {
  var curVolume = doms.video.volume;
  if (doms.video.muted) {
    curVolume = 0;
  }
  doms.volume.range.value = Math.round(curVolume * 100);
  doms.volume.text.textContent = Math.round(curVolume * 100) + "%";
}

//交互
doms.btnPlay.addEventListener("click", function () {
  if (doms.video.paused) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
});

doms.progress.range.addEventListener("input", function () {
  doms.video.currentTime = (this.value / 100) * doms.video.duration;
  setProgress();
});

doms.video.addEventListener("timeupdate", function () {
  setProgress();
});

var btns = document.querySelector("#rate");
btns.addEventListener("click", function (e) {
  var target = e.target;
  if ((e.target.tagName = "BUTTON")) {
    doms.video.playbackRate = e.target.dataset.rate;
  }
  setRate();
});

doms.volume.range.addEventListener("input", function () {
  doms.video.volume = +doms.volume.range.value / 100;
  setVolume();
});

doms.buttons.save.addEventListener("click", function () {
  var obj = {
    currentTime: doms.video.currentTime,
    rate: doms.video.playbackRate,
    volume: doms.video.volume,
  };
  var json = JSON.stringify(obj);
  localStorage.setItem("settings", json);
  console.log(json);
});

doms.buttons.load.addEventListener("click", function () {
  var json = JSON.parse(localStorage.getItem("settings"));
  doms.video.currentTime = json.currentTime;
  doms.video.volume = json.volume;
  doms.video.playbackRate = json.rate;

  setProgress();
  setVolume();
  setRate();
});
