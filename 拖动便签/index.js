var moveBar = document.querySelector(".move-bar");
var note = document.querySelector(".note");
//为移动条添加鼠标按下事件
moveBar.onmousedown = function (e) {
  //获取鼠标按下的位置
  var x = e.clientX,
    y = e.clientY;
  //获取元素的位置
  var pos = moveBar.getBoundingClientRect();
  var ex = pos.left,
    ey = pos.top;

  //获取元素的尺寸
  var ew = note.offsetWidth;
  var eh = note.offsetHeight;
  //获取视口的尺寸
  var viewW = document.documentElement.clientWidth;
  var viewH = document.documentElement.clientHeight;

  //计算边界
  var maxLeft = viewW - ew;
  var maxTop = viewH - eh;

  window.onmousemove = function (e) {
    //计算移动的距离
    var disX = e.clientX - x;
    var disY = e.clientY - y;

    //计算新的位置
    var left = ex + disX;
    var top = ey + disY;

    //边界判断
    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }
    if (left > maxLeft) {
      left = maxLeft;
    }
    if (top > maxTop) {
      top = maxTop;
    }
    //应用新的位置
    note.style.left = left + "px";
    note.style.top = top + "px";
  };
  //释放鼠标时清除事件
  window.onmouseup = function () {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};
