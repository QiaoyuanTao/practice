//验证是否登录 如果没有登录 跳转登录页
(async function () {
  const resp = await API.profile();
  const user = resp.data;
  window.user1 = user;

  if (!user) {
    alert("未登录或登录已过期");
    location.href = "./login.html";
    return;
  }

  const doms = {
    aside: {
      nickname: $("#nickname"),
      loginId: $("#loginId"),
    },
    close: $(".close"),
    chatContainer: $(".chat-container"),
    txtMsg: $("#txtMsg"),
    msgContainer: $(".msg-container"),
  };
  //下面的代码环境一定是登录状态
  setUserInfo();

  //设置用户信息
  function setUserInfo() {
    doms.aside.nickname.innerText = user.nickname;
    doms.aside.loginId.innerText = user.loginId;
  }

  //加载历史记录
  await loadHistory();
  async function loadHistory() {
    const resp = await API.getHistory();
    for (const element of resp.data) {
      addChat(element);
    }
    scrollBottom();
  }

  doms.msgContainer.addEventListener("submit", function (e) {
    e.preventDefault();
    sendChat();
  });

  //注销用户
  doms.close.addEventListener("click", function () {
    API.loginOut();
    location.href = "./login.html";
  });

  /**
   * 添加对话
   * @param {*} chatInfo
   */
  function addChat(chatInfo) {
    const div = $$$("div");
    div.classList.add("chat-item");
    if (chatInfo.from) {
      div.classList.add("me");
    }

    const img = $$$("img");
    img.classList.add("chat-avatar");
    img.src = chatInfo.from ? "./asset/avatar.png" : "./asset/robot-avatar.jpg";

    const content = $$$("div");
    content.classList.add("chat-content");
    content.innerText = chatInfo.content;

    const date = $$$("div");
    date.classList.add("chat-date");
    date.innerText = formateData(chatInfo.createdAt);

    div.appendChild(img);
    div.appendChild(content);
    div.appendChild(date);
    doms.chatContainer.appendChild(div);
  }

  /**
   * 格式化时间
   * @param {*} timestamp
   * @returns
   */
  function formateData(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  }

  function scrollBottom() {
    doms.chatContainer.scrollTop = doms.chatContainer.scrollHeight;
  }

  async function sendChat() {
    const content = doms.txtMsg.value;
    if (!content) return;
    addChat({
      content: content,
      from: user.loginId,
      to: null,
      date: Date.now(),
    });
    doms.txtMsg.value = "";
    scrollBottom();
    const resp = await API.sendChat(content);
    console.log(resp);
    addChat({
      content: resp.data.content,
      from: null,
      to: user.loginId,
      date: Date.now(),
    });
    scrollBottom();
  }
})();
