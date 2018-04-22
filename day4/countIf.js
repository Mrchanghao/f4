function countIf(group, target) {
  var i = group.length;
  var result = 0;

  while(i--) {
    if (group[i] === target) {
      result += 1;
    }
  }
  return result;
}

var classs = ['남', '여', '여', '남', '여'];
console.log(countIf(classs, '남')); // 2
console.log(countIf(classs, '여')); // 3
