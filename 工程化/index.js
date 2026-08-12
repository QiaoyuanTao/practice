//启动文件 通过node命令运行的文件
//node环境 （CMJ规范）
//1）所有的js文件都是一个模块，运行的模块叫入口模块
//2）所有的模块中的全局变量 函数 均不会产生污染
//3）当一个模块需要提供一些东西给其他模块使用时 需要将这些东西导出
//4)当一个模块需要用到别的模块的东西时 需要导入
//5)模块路径必须已./ ../ 开头

const mathMethod = require("./math.js");
console.log(mathMethod);
console.log(mathMethod.sum(1, 2));
