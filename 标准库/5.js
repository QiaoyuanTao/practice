var nums = [1, 2, 3, 4, "p", "b", "a", 7, "asd", 100];

for (var i = 0; i < nums.length; i++) {
  if (typeof nums[i] === "string") {
    nums.splice(i, 1);
    i--;
  }
}

console.log(nums);
