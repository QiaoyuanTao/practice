//npm只能在node环境使用

const Mock = require("mockjs");
const result = Mock.mock({ name: "@cname" });
console.log(result);

const _ = require("lodash");
console.log(_.chunk([1, 2, 3, 4], 2));
