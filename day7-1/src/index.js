const DOM = {
  app: '#app'
};

$(DOM.app).append(`<div id="count">0</div>`);
$(DOM.app).append(`<button id="btn-up">up</button>`);
$(DOM.app).append(`<button id="btn-down">down</button>`);


class Person {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.space = [];
  }
  eat(food) {
    this.space.push(food);
    this.hp++;
  }
}
/*
const p1 = new Person('suho');
const p11 = {
  name: 'suho',
  hp: 100,
  space: []
};
const p2 = new Person('junghyun');
const p22 = {
  name: 'junghyun',
  hp: 100,
  space: []
};
p1.eat({name: '사과'});
p2.eat({name: '똥'});
p2.eat({name: '똥'});
*/

class Student extends Person {
  constructor(name) {
    super(name);
  }
  study() {
    this.hp--;
  }
  eat(food) {
    console.log('선생님 눈치 보며 먹는다');
    super.eat(food);
  }
}
const s1 = new Student('suho');
s1.study();
s1.study();
s1.study();
s1.study();
s1.eat({name: '포도'});
console.log(s1);

class Father extends Person {
  constructor(name) {
    super(name);
  }
  work() {
    this.hp--;
  }

  eat(food) {
    console.log('와이프 눈치보며 먹는다');
    super.eat(food);
  }
}
const f1 = new Father('suho');
f1.work();
f1.eat({name:'사과'});
f1.eat({name:'사과'});
f1.eat({name:'사과'});
f1.eat({name:'사과'});
console.log(f1);


class Mother extends Person {
  constructor(name) {
    super(name);
  }
}
/*
$('#btn').on('click', function() {
  $('#app').addClass('danger');
});
*/
