// var obj = {
//   a: 100,
//   b: "asd",
//   c: "as",
//   taken: 3000,
// };

// for (var key in obj) {
//   console.log(key + "=" + obj[key]);
// }

// var count = 0;
// for (var key in obj) {
//   if (typeof obj[key] === "string") count += 1;
// }
// console.log(count);

// var count = 0;
// for (var key in obj) {
//   if (typeof obj[key] === "number") {
//     obj[key] = "$" + obj[key];
//     console.log(obj[key]);
//   }
// }
// console.log(obj);

var arr = [1, 2, 3];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
  newArr.push({ number: arr[i], doubleNumber: arr[i] * 2 });
}
console.log(newArr);
