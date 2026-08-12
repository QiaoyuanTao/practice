var abc = (function () {
  var a = 1;
  var b = 2;

  function hello() {
    console.log("hello world");
  }

  var count = 1;

  return { sayHi: hello, count: count };
})();
