console.log("hello");

var QRCode = require("qrcode");

QRCode.toString(
  "你真棒，今天是疯狂星期四，v我50",
  { type: "terminal" },
  function (err, data) {
    console.log(data);
  },
);
