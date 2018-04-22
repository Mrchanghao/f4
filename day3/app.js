/**
 * 1. text를 받아서 그 text로 alert을 띄우는 popup 함수를 만들어라
 * 2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup 해라
 * 3. Android 일 때는 '안드로이드' 라는 문자열을 popup 해라
 * 4. 둘다 아닐 때는 '기타'라는 문자열을 popup해라
 */
function abc(selector) {
  if ('id') {
    return 'getElementById'
  }
  if('class') {
    return 'getElementsByClassName'
  }
}
function getElementById(id) {
  return document.getElementById(id);
}
function dg(selector) {
  return document[abc(selector)](selector);
}
getElementById('btn').addEventListener('click', app);
getElementById('input-color')
  .addEventListener('change', function(e) {
    css('content', 'color', e.target.value);
  });
getElementById('input-font-size')
  .addEventListener('change', function(e) {
    css('content', 'fontSize', e.target.value);
  });
getElementById('input-color-test')
  .addEventListener('change', function(e) {
    changeColor('test', e.target.value);
  });
function popup(text) {
  alert(text);
}
function css(id, key, value) {
  getElementById(id).style[key] = value;
}
function changeColor(id, color) {
  getElementById(id).style.color = color;
}
function changeFontSize(fontSize) {
  getElementById('content').style.fontSize = fontSize;
}
function draw(deviceName) {
  getElementById('content').innerText = deviceName;
}
/*var navigator = {
  userAgent: {
    match: function() {

    }
  }
}*/
function isIPhone() {
  return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
  return navigator.userAgent.match(/Android/);
}
function app() {
  if (isIPhone()) {
    return draw('아이폰');
  }
  if(isAndroid()) {
    return draw('안드로이드');
  }

  return draw('기타');
}
// app();
