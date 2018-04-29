var numbers = [1, 2, 3, 4, 5];

var ff = filter(numbers, function(v) {
  return v > 3;
});
console.log(ff); // [4, 5]
var ff2 = filter(numbers, function(v) {
  return v > 2;
});
console.log(ff2); // [3, 4, 5]

var m = map(numbers, function(v) {
  return v + 10;
});
console.log(m); // [11, 12, 13, 14, 15]

var m2 = map(numbers, function(v) {
  return v * 2;
});
console.log(m2); // [2, 4, 6, 8, 10]

