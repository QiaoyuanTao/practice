// for (var i = 1; i < 101; i++) {
//   (i + 1) % 2 === 0 && console.log(i);
// }

// var nums = [22, 435, 65, 78, 21, 7, 43, 567];
// var newArr = [];
// for (var i = 0; i < nums.length; i++) {
//  nums[i] % 2 !== 0 && newArr.push(nums[i]);
// }
// console.log(newArr);

// var count = 0;
// for (var i = 1; i < 101; i++) {
//   count += i;
// }
// console.log(count);

// var count = 3;
// var value = 3;
// for (var i = 1; i < value; i++) {
//   count *= i;
// }
// console.log(count);

// var nums = [22, 435, 65, 7, 21, 7, 43, 567];
// var count = 0;
// for (var i = 0; i < nums.length; i++) {
//   nums[i] % 2 !== 0 && count++;
// }
// console.log(count);

var nums = [22, 435, 65, 7, 21, 7, 43, 567];
var count = 0;
for (var i = 0; i < nums.length; i++) {
  nums[i] % 2 !== 0 && (count += nums[i]);
}
console.log(count);
