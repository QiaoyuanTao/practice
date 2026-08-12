var filename = "d://files/mymap/3.jpg";

var index = filename.lastIndexOf(".");
var extname = filename.substring(index);

var houzuiming = [".jpg", ".gif", ".bmp", ".webp", ".png"];
if (houzuiming.includes(extname)) {
  console.log("合法");
} else {
  console.log("不合法");
}
