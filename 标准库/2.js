function getRandomSTring(length) {
  var result = "";
  var str = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < length; i++) {
    var index = getRandom(0, str.length);
    result += str[index];
  }
  console.log(result);
}
getRandomSTring(26);

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(Math.random().toString(36).substring(2, 8));
