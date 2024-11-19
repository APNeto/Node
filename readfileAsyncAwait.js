const fs = require('fs');

const readFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('myfile.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        });
    })
}

async function readFileAsync() {
    try{
        const data = await readFilePromise();
        console.log("File contents:", data);
    }
    catch(err) {
        console.error("Failed to read the file:", err);
    }
}

readFileAsync()
    .then(() => {
        console.log("It has resolved")
    })
console.log("This will be printed first!");
