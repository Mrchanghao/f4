function filter(list, callbackFn) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (callbackFn(list[i])) {
      result.push(list[i]);
    }
  }
  return result;
}