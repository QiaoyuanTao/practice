function formatDate(date, format) {
  var year = date.getFullYear().toString().padStart(4, "0");
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");

  var hour = date.getHours().toString().padStart(2, "0");
  var minute = date.getMinutes().toString().padStart(2, "0");
  var second = date.getSeconds().toString().padStart(2, "0");
  var millisecond = date.getMilliseconds().toString().padStart(4, "0");

  return format
    .replace("yyyy", year)
    .replace("MM", month)
    .replace("dd", day)
    .replace("HH", hour)
    .replace("mm", minute)
    .replace("ss", second)
    .replace("ms", millisecond);
}

var a = new Date();
console.log(formatDate(a, "yyyy年MM月dd日HH时mm分ss秒ms毫秒"));
