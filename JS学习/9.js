function isIncludes(arr, target) {
  var isIncludes = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      isIncludes = true;
      break;
    }
  }

  if (isIncludes) {
    return true;
  } else {
    return false;
  }
}
var nums1 = [1, 3, 2, 5, 10, 9];
var nums2 = [6, 3, 2, 7, 11, 33];
var nums3 = [2, 5, 1, 1];
var target = 8;
// isIncludes(nums, target);

// isIncludes(nums1, 2) && isIncludes(nums2, 2)
//   ? console.log("yes")
//   : console.log("no");

var isInclude = true;

for (var i = 0; i < nums3.length; i++) {
  if (!isIncludes(nums1, nums3[i])) {
    isInclude = false;
    break;
  }
}
console.log(isInclude);
