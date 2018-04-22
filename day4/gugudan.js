function gugudan(n, m) {
  if (!m) {
    m = 9;
  }
  for (var i = 1; i <= m; i++) {
    console.log(n + ' * ' + i + ' = ' + (n * i));
  }

  // console.log('2 * 2 = 4');
  // console.log('2 * 3 = 6');
}

gugudan(2, 4);
