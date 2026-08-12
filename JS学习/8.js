/**
 *
 * @param {*} n 要求阶乘的数
 * @returns 阶乘结果
 */

function factorial(n) {
  if (n < 1) return 0;
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

var n1 = factorial(5);
var n2 = factorial(6);

// console.log(n1 + n2);

function lessThound() {
  for (var i = 1; ; i++) {
    if (factorial(i) < 1000) {
      console.log(i);
    } else break;
  }
}
lessThound();
