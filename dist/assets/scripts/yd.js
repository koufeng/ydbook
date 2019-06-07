// 全局帮助函数
function yd(params) {}
yd._version = 0.1
yd.throttle = function(fn, wait) {
  var timer;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
      }, wait);
      return fn.apply(this, args);
    }
  }
}