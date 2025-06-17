const http = require('http');
const path = require('path');
const fs = require("fs");

var server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === "index.html") {
        res.writeHead(200, { "Content-Type": "text/html" })
        path = path.join(__dirname, "pages", "index.html")

        fs.

        res.write("Hooray. Take 1 shot\n")
        res.end("Ok you can rest now\n")
    }
});

// Starting express server
server.listen(4040, () => {
    console.log(`Server started on port 4040`)
});