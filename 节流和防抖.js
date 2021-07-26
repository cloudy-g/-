// 对于触发频率较快的函数，可以使用 防抖和节流 限制调用的频率
// debounce 防抖 可以让该函数在某个时间段若是发送多次调用的话，
//                只在最后时间段结束的时候调用一次。期间再次被调用会重新定时。
const debounce = function (fn, diff) {
  let timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, diff);
  }
}
// throttle 节流  可以让该高频触发的函数间隔一段时间执行一次，
const throttle = function (fn, diff) {
  let start = +(new Date());
  return function (...args) {
    let end = +(new Date());

    if (end - start >= diff) {
      fn.apply(this, args);
      start = +(new Date());
    }
  }
}
const throttle1 = function (fn, delay) {
  let canRun = true;
  return function (...args) {
    if (canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, delay);
  }
}