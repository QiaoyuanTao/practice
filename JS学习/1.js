function sum(a, b) {
  // a = +a;
  // if (isNaN(a)) {
  //   a = 0;
  // }

  a = +a || 0;
  // b = +b;
  // if (isNaN(b)) {
  //   b = 0;
  // }
  b = +b || 0;
  return a + b;
}
console.log(sum("abc", 20));
