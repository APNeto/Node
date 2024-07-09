const net = require('net');

var server = net.createServer((socket) => {
    socket.write("Hooray. Take 1 shot\n")

    let interval = setInterval(()=>{
        socket.write("Take 1 more shot\n")
    }, 5000)

    timeout = setTimeout(() => {
        clearInterval(interval)
        socket.end("Ok you can rest now\n")
    }, Math.random() * 10 * 1000 + 5000)

    socket.on('end', () => {
        clearInterval(interval)
        clearTimeout(timeout)
    })
});

// Starting express server
server.listen(4040, () => {
    console.log(`Server started on port 4040`)
});