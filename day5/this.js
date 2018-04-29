function a(a,b,c) {
  console.log(this);
  console.log(a,b,c);
  // console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    var obj = arguments[i];
    // console.log(obj);
  }
  return this;
}
// a(1,5,4,24,12,3,4,6,7);
var obj = {
  b: function() {
    console.log(this);
  }
};
// obj.b();

var obj2 = {
  c: a
};
//obj2.c();



function a(a,b,c) {
  console.log(this);
  console.log(a,b,c);
  // console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    var obj = arguments[i];
    // console.log(obj);
  }
  return this;
}
/*a.call({name: 123123}, 1,2,3);
a.apply({name: 'apply'}, [1,2,3]);
a();
obj2.c();*/
a = a.bind({name:'bind'});
a();











