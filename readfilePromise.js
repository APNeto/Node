const fs = require('fs');

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err); 
      } else {
        resolve(data); 
      }
    });
  });
}

readFilePromise('myfile.txt')
  .then(data => {
    console.log("File contents:", data);
  })
  .catch(err => {
    console.error("Failed to read the file:", err);
  });
