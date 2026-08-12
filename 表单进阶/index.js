function $(selector) {
  return document.querySelector(selector);
}

function setSubmitButtonStatus() {
  var checkBox = $("input[type = 'checkbox']");
  var submitButton = $('button[type="submit"]');

  if (checkBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function setSendCodeButtonStatus() {
  var textPhone = $('input[type="text"][placeholder="请输入11位手机号"]');
  var sendCode = $(".captcha button");

  if (textPhone.value.length === 11) {
    sendCode.disabled = false;
  } else {
    sendCode.disabled = true;
  }
}
function setSelectedLoves() {
  var loves = $("span#loves");
  var selected = $("select[multiple]");
  console.log(selected);
  var choose = [];
  for (var i = 0; i < selected.options.length; i++) {
    if (selected.options[i].selected) {
      choose.push(selected.options[i].textContent);
    }
  }
  loves.textContent = "选择的爱好：" + choose.join(" ");
}

setSubmitButtonStatus();
setSendCodeButtonStatus();
setSelectedLoves();

$("input[type = 'checkbox']").addEventListener("input", setSubmitButtonStatus);
$('input[type="text"][placeholder="请输入11位手机号"]').addEventListener(
  "input",
  setSendCodeButtonStatus,
);
$("select").addEventListener("change", setSelectedLoves);

const txt = document.querySelectorAll(".txt");

for (var i = 0; i < txt.length; i++) {
  txt[i].addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      this.value = ""; // let 每次循环都有独立的 i
    }
  });
}
