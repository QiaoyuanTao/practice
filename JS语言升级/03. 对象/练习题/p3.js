// 根据下面的调用和注释，完成函数 createOptions
// function createOptions({ time, speed, text } = {}) {
//   var obj = { time: 1000, speed: 50, text: "" };
//   if (time) {
//     obj.time = time;
//   }
//   if (speed) {
//     obj.speed = speed;
//   }
//   if (text) {
//     obj.text = text;
//   }
//   console.log(obj);
//   return obj;
// }

function createOptions(options) {
  options = options ? options : {};
  const defaultOptions = { time: 1000, speed: 50, text: "" };
  console.log({ ...defaultOptions, ...options });
  return { ...defaultOptions, ...options };
}

createOptions(); // { time: 1000, speed: 50, text: '' }
createOptions({
  time: 500,
}); // { time: 500, speed: 50, text: '' }

createOptions({
  time: 500,
  text: "hello world",
}); // { time: 500, speed: 50, text: 'hello world' }
