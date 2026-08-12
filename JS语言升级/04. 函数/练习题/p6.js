// 根据下面的调用示例，编写User类
// function User(account, password) {
//   this.account = account;
//   this.password = password;
// }

// User.prototype.sayHello = function () {
//   console.log(`输出：账号 —— ${this.account}，密码 —— ${this.password}`);
// };

class User {
  constructor(account, password) {
    this.account = account;
    this.password = password;
  }

  sayHello() {
    console.log(`输出：账号 —— ${this.account}，密码 —— ${this.password}`);
  }
}

const u = new User("account", "pwd123"); // 创建用户
u.sayHello(); // 输出：账号 —— account，密码 —— pwd123
