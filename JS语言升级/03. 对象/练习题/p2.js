const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
// for (const element of Object.keys(obj)) {
//   console.log(element);
// }

// 遍历对象的所有属性值
// for (const element of Object.values(obj)) {
//   console.log(element);
// }

// 遍历对象的所有属性名和属性值
// for (const element of Object.entries(obj)) {
//   console.log(element[0], element[1]);
// }

// 复制obj的所有属性到一个新的对象
// const newObj = { ...obj };
// console.log(newObj);

// 复制obj除a以外的所有属性到一个新的对象

// const { a, b, c } = obj;
// const newObj = { b, c };
// console.log(newObj);
const { a, ...newObj } = obj;
console.log(newObj);
