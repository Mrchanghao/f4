const fs = require('fs');

// fs.writeFile('abc123.txt', 'hihihihihi', () => {
//     console.log('success');
// });

fs.readFile('abc.txt', 'utf8', (err, file) => {
    console.log(file);
});