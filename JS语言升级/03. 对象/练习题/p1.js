/**
 * 创建一个用户对象
 * 对象格式：
 * {
 *    firstName: xxx,
 *    lastName: xxx,
 *    fullName: xxx,
 *    sayHello: fn
 * }
 */
function createUser(firstName, lastName) {
  const obj = {
    firstName,
    lastName,
    fullName: `${firstName}${lastName}`,
    sayHello: function () {
      console.log(`hello,my name is ${fullName}`);
    },
  };
  return obj;
}

// 调用createUser函数，使用解构得到fullName

const newUser = createUser("陶", "乔元");

console.log(newUser);
const { fullName } = newUser;
console.log(fullName);
