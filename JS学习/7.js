var students = [
  {
    id: 988985,
    name: "梁平",
    sex: "女",
    age: 15,
    address: "安徽省 淮南市",
    tel: "12957961008",
  },
  {
    id: 299422,
    name: "邱杰",
    sex: "男",
    age: 29,
    address: "辽宁省 本溪市",
    tel: "12685726676",
  },
  {
    id: 723972,
    name: "王超",
    sex: "女",
    age: 14,
    address: "新疆维吾尔自治区 阿克苏地区",
    tel: "15277794541",
  },
  {
    id: 456789,
    name: "李明",
    sex: "男",
    age: 18,
    address: "北京市 海淀区",
    tel: "13812345678",
  },
  {
    id: 123456,
    name: "张华",
    sex: "女",
    age: 16,
    address: "上海市 浦东新区",
    tel: "13987654321",
  },
  {
    id: 654321,
    name: "刘洋",
    sex: "男",
    age: 20,
    address: "广东省 广州市",
    tel: "13711112222",
  },
  {
    id: 789012,
    name: "陈静",
    sex: "女",
    age: 17,
    address: "浙江省 杭州市",
    tel: "13633334444",
  },
  {
    id: 345678,
    name: "赵强",
    sex: "男",
    age: 19,
    address: "四川省 成都市",
    tel: "13555556666",
  },
  {
    id: 901234,
    name: "孙丽",
    sex: "女",
    age: 15,
    address: "湖北省 武汉市",
    tel: "13477778888",
  },
  {
    id: 567890,
    name: "周伟",
    sex: "男",
    age: 22,
    address: "江苏省 南京市",
    tel: "13399990000",
  },
];

// console.log(students[0]);

// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// var female = [];
// for (var i = 0; i < students.length; i++) {
//   if (students[i].sex === "女") {
//     female.push(students[i]);
//   }
// }
// console.log(female);

// var femaleAgeUnder25 = [];
// for (var i = 0; i < female.length; i++) {
//   female[i].age < 25 && femaleAgeUnder25.push(female[i]);
// }
// console.log(femaleAgeUnder25);

// var newStu = [];
// for (var i = 0; i < students.length; i++) {
//   students[i].name[0] === "陈" && newStu.push(students[i]);
// }
// console.log(newStu);

// var telEnd1 = [];
// for (var i = 0; i < students.length; i++) {
//   students[i].tel[students[i].tel.length - 1] === "1" &&
//     telEnd1.push(students[i]);
// }
// console.log(telEnd1);

// var nameTel = [];
// for (var i = 0; i < students.length; i++) {}

// var nameArr = [];
// for (var i = 0; i < students.length; i++) {
//   if (students[i].sex === "女")
//     nameArr.push({ name: students[i].name, tel: students[i].tel });
// }
// console.log(nameArr);

// var sum = 0;
// for (var i = 0; i < students.length; i++) {
//   sum += students[i].age;
// }
// console.log(sum);

// var avg = sum / students.length;
// console.log(avg);

// var result = { name: [], age: [] };

// for (var i = 0; i < students.length; i++) {
//   result.name.push(students[i].name);
//   result.age.push(students[i].age);
// }
// console.log(result);

// var target = 789012;
// for (var i = 0; i < students.length; i++) {
//   students[i].id === target && console.log(students[i]);
// }

// var isHasAgeOver28Male = false;
// for (var i = 0; i < students.length; i++) {
//   if (students[i].age > 28 && students[i].sex === "男") {
//     isHasAgeOver28Male = true;
//     break;
//   }
// }
// console.log(isHasAgeOver28Male);

// var isIn28Female = false;
// for (var i = 0; i < students.length; i++) {
//   if (!(students[i].sex = "女" && students[i].age > 28)) {
//     isIn28Female = true;
//   }
// }
// console.log(isIn28Female);

function filter(arr, callback) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

var studs = filter(students, function (i) {
  return i.sex === "女";
});

console.log(studs);
