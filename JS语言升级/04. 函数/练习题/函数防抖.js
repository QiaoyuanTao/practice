const fn = (a, b) => console.log(a + b);

const debounce = (fn, duration = 1000) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
};

const newFn = debounce(fn, 1000);

newFn(1, 2);
newFn(2, 2);
newFn(3, 2);
