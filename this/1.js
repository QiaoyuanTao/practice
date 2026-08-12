var person = {
  name: "monica",
  age: 18,
  sayHi: function () {
    console.log(this.name, this.age);
  },
};
person.sayHi();
