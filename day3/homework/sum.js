function sum(a) {
  return function(b) {
    return a + b;
  }
}
var f1 = sum(25);
var f2 = sum(5);
var f3 = sum(10);
console.log(f1(10));
console.log(f2(10));
console.log(f3(10));
