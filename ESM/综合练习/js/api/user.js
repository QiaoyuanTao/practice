const BASE_URL = "https://study.duyiedu.com/api/user/login";
const login = async function (loginId, loginPwd) {
  const resp = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ loginId, loginPwd }),
  });
  return await resp.json();
};

export { login };
