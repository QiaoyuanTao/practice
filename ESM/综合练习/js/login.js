//导出一个函数 调用该函数 会自动获取文本框的值完成登录
import { login } from "./api/user.js";

let isLoginning = false;

export default async function () {
  if (isLoginning) return;
  isLoginning = true;
  const btn = document.querySelector("#btnSubmit");
  btn.value = "登录ing...";
  const userName = document.querySelector("#userName").value;
  const userPassword = document.querySelector("#userPassword").value;

  if (!userName) {
    alert("请输入账号！");
    return;
  }
  if (!userPassword) {
    alert("请输入密码！");
    return;
  }

  const resp = await login(userName, userPassword);
  console.log(resp);
  // const data = resp.data.data;

  if (resp.data) {
    alert(`登录成功，${resp.data.nickname}`);
  } else {
    alert("请重新输入账号密码");
  }
  isLoginning = false;
  btn.value = "登录";
}
