var year = 1900;

var result = (year % 40 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(result ? "是" : "否");
