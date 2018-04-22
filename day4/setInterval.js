// looper 함수는 전달받은 함수를, 전달받은 횟수만큼 실행
function looper(callbackFn, count) {
  for (var i = 0; i < count; i++) {
    callbackFn(i);
  }
}

looper(function(number) {
  console.log(number);
}, 10); // 사용자 관점

// 1. looper 함수를 작성한다.
// 2. 2개의 파라미터를 선언한다.
// 3. 반복문을 작성한다
// 4. 잘 반복되는지 확인하기 위해 console.log(i) 같은걸 해본다.
// 5. 지정된 횟수만큼 반복하도록 바꾼다.
// 6. 반복문 내에 로직을 채운다.
