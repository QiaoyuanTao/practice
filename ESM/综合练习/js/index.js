import { login } from "./api/user.js";
import loginFn from "./login.js";

// login("asdf", "2342").then((data) => console.log(data.data));

// window.login = loginFn;

const btn = document.querySelector("#btnSubmit");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  loginFn();
});
