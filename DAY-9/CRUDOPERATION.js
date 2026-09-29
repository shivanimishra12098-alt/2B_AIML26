//creating a file using fs module 
const fs = require('fs');

fs.writeFile('sample.txt', 'Hello, shivi!', (err) => {
    if (err) throw err;
    console.log('File created successfully.');
});
//reading a file using fs module
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
//updating a file using fs module
fs.appendFile('sample.txt', '\nThis is an appended text.', (err) => {
    if (err) throw err;
    console.log('File updated successfully.');
});
//deleting a file using fs module
fs.unlink('sample.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully.');
});