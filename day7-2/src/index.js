const $ = require('jquery');
const Chart = require('chart.js');

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
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
const m1 = new Mother('gggg');
m1.eat({});
/*
$('#btn').on('click', function() {
  $('#app').addClass('danger');
});
*/
