// person.fullName = person.firstName + person.lastName;

// person.sayHi = function () {
//   console.log("我的名字是：" + person.fullName);
// };

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;

  this.sayHi = function () {
    console.log("我的名字是：" + this.fullName);
  };
}

var person = new Person("陶", "乔元");

person.sayHi();
