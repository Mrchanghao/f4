function typeToKor(type) {
  var types = {
    number: '숫자!!!!!!!',
    string: '문자',
    boolean: '참거짓',
    function: '함수',
    object: '객체!!',
    undefined: '없어~~~'
  };

  return types[typeof type];
}

console.log(typeToKor(5));
console.log(typeToKor('hi'));
console.log(typeToKor(true));