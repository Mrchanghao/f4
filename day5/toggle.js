/*
function toggle() {
  sw = !sw;
  return sw;
}
*/

var toggle = (function() {
  var sw = false;
  return function() {
    sw = !sw;
    return sw;
  };
})();
