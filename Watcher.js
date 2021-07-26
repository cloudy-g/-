// 观察者模式， 可以模仿 vue实现   发布订阅模式
//  Dep 类收集依赖作为发布者   Watcher (订阅者)   Observe作为监听器进行监听数据改变  
function defineReactive(obj, key) {
  let dep = new Dep();
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.add(Dep.target);
      }
      return val;
    },
    set(newVal) {
      if (val == newVal) {
        return;
      }
      val = newVal;
      dep.notify();
    }
  })
}

class Dep {
  constructor() {
    this.watchers = [];
  }
  add(watcher) {
    this.watchers.push(watcher);
  }
  notify() {
    for (let i = 0; i < this.watchers.length; i++) {
      const watcher = this.watchers[i];
      watcher.update();
    }
  }
}
Dep.target = null;

class Observe {
  constructor(obj) {
    this.walk(obj);
  }
  walk(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }
}

class Watcher {
  constructor(callback) {
    this.callback = callback;
    this.run();
  }
  run() {
    Dep.target = this;
    this.callback();
    Dep.target = null;
  }
  update() {
    this.callback();
  }
}
let data = {
  name: 'gg'
}
data.__observe__ = new Observe(data);

function call() {
  document.body.innerHTML = data.name;
}
let watcher = new Watcher(call);

setTimeout(() => {
  data.name = 'mm'
  console.log(1);
}, 1000)