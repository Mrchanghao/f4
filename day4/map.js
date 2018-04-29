function map(list, callbackFn) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    result[i] = callbackFn(list[i]);
  }
  return result;
}