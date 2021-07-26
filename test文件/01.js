// const a = {
//   name: 'abc',
//   getName: () => {
//     console.log(this.name);
//     return this.name;
//   }
// }

// const c = a.getName;
// c()
// a.getName()

var a = 1;

{
  a = 2;

  function a() { }
  console.log(a);

  a = 3;
}
console.log(a);
console.log(globalThis);