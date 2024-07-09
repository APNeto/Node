const http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})

    res.write("Hooray. Take 1 shot\n")
    let interval = setInterval(()=>{
        res.write("Take 1 more shot\n")
    }, 5000)

    setTimeout(() => {
        clearInterval(interval)
        res.end("Ok you can rest now\n")
    }, Math.random() * 10 * 1000 + 5000)
});

// Starting express server
server.listen(4040, () => {
    console.log(`Server started on port 4040`)
});