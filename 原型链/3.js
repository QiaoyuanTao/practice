function inherit(child, parent) {
  Object.setPrototypeOf(child.prototype, parent.prototype);
}

function User(account, password) {
  this.account = account;
  this.password = password;
}

User.prototype.watchFreeFilm = function () {
  console.log("观看免费电影");
};

function VIPUser(account, password, expires) {
  User.call(this, account, password);
  this.expires = expires;
}

VIPUser.prototype.watchPayFilm = function () {
  console.log("观看付费视频");
};

VIPUser.prototype.watchFreeFilm = function () {
  console.log("观看无广告免费视频");
};

inherit(VIPUser, User);

var vip = new VIPUser("taoqiaoyuan", "123456", "2027 - 10 - 8");
vip.watchPayFilm();
vip.watchFreeFilm();
var user = new User("tao", "1231");
user.watchFreeFilm();
