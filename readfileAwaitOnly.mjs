import fs from 'fs/promises'

try {
    const data = await fs.readFile('myfile.txt', 'utf-8')
    console.log("File contents: ", data)
}
catch(err) {
    console.log("Failed reading file: ", err)
}
