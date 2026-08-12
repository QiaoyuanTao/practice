var fakeArr = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

var arr = Array.prototype.slice.call(fakeArr);
console.log(arr);
