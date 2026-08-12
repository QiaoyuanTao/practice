const instance = axios.create({
  baseURL: "https://study.duyiedu.com",
});

async function login(loginId, loginPwd) {
  const resp = await instance.post("/api/user/login", {
    loginId,
    loginPwd,
  });
  return resp;
}

//统一处理 拦截器
instance.interceptors.response.use(
  (resp) => {
    // Do something before response is sent

    const token = resp.headers.authorization;
    if (token) {
      localStorage.setItem("token", token);
    }
    if (resp.data.code !== 0) {
      alert(resp.data.msg);
    }
    return resp;
    // return resp.data.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  },
);

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log(config);
    // Do something before request is sent
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

//发出请求
// (async function () {
//   const resp = await login("admin1", "123123");
//   console.log(resp.data.data); //这里的resp是拦截器返回的resp.data.data
// })();

//注册
// async function reg(loginId, loginPwd, nickName) {
//   const resp = await instance.post("/api/user/reg", {
//     loginId,
//     loginPwd,
//     nickName,
//   });
// }

// (async function () {
//   const resp = await reg("admin", "123123", "taoqiaoyaun");
//   console.log(resp);
// })();

async function exists(loginId) {
  const resp = await instance.get("/api/user/exists", { params: { loginId } });
  return resp;
}

// (async function () {
//   const resp = await exists("admin");
//   console.log(resp);
// })();

async function profile() {
  return await instance.get("/api/user/profile");
}

(async function () {
  const resp = await profile("admin");
  console.log(resp);
})();
