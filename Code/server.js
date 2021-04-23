    const http = require('http')
    const server =  http.createServer()
    server.on('request', (req, res) => {
        res.end('Helo')
    })
    server,listen(25565, () => {
        console.log("Server has been started")
    })