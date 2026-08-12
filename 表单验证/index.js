function validateLoginId() {
  var div = document.querySelector("#loginId");
  var input = document.querySelector("#loginId input");
  var msg = document.querySelector("#loginId .msg");

  var err = "";
  var loginId = input.value.trim();
  if (!loginId) {
    err = "账号不能为空";
    msg.textContent = err;
  } else if (loginId.length < 6 || loginId.length > 16) {
    err = "账号长度必须在6-16个字符之间";
    msg.textContent = err;
  }
  if (err) {
    div.className = "form-item err";
  } else {
    div.className = "form-item";
  }

  return !err;
}

function validatePassword() {
  var div = document.querySelector("#loginPassword");
  var input = document.querySelector("#loginPassword input");
  var msg = document.querySelector("#loginPassword .msg");

  var err = "";
  var password = input.value.trim();
  if (!password) {
    err = "密码不能为空";
    msg.textContent = err;
  } else if (password.length < 6 || password.length > 16) {
    err = "密码长度必须在6-16个字符之间";
    msg.textContent = err;
  }

  if (err) {
    div.className = "form-item err";
  } else {
    div.className = "form-item";
  }

  return !err; //没有错误 返回true
}

function validate() {
  var r1 = validateLoginId();
  var r2 = validatePassword();
  return r1 && r2; //都没有错误 返回true
}

var loginId = document.querySelector('input[type = "text"]');
loginId.addEventListener("input", validateLoginId);

var loginPassword = document.querySelector('input[type = "password"]');
loginPassword.addEventListener("input", validatePassword);

var form = document.querySelector(".form-container");

form.addEventListener("submit", function (e) {
  if (!validate()) {
    //验证结果为false 则阻止表单提交
    e.preventDefault();
  }
});
