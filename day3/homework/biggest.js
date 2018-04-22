function biggest(a, b, c, d) {
  var max = a;

  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  if (max < d) {
    max = d;
  }

  return max;
}

function a(max) {
  var result = [];
  while (max--) {
    result.push(Math.floor(Math.random() * 1000) + 1);
  }
  return result.join(', ');
}