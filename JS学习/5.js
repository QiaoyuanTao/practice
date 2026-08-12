// var value = 564;
// var nums = [214, 324, 564, 234, 32, 5, 23, 75, 213, 2];
// var isInclude = -1;
// for (var i = 0; i < nums.length; i++) {
//   nums[i] === value && (isInclude = i);
// }

// console.log(isInclude);

var nums = [214, 324, 564, 234, 32, 5, 23, 75, 213, 2];
for (var i = nums.length - 1; i >= 0; i--) {
  if (nums[i] % 2 !== 0) {
    console.log(i);
    break;
  }
}
