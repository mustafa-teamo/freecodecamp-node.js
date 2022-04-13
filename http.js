const http = require('http')

http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home')
    }
    else if(req.url === '/about'){
        res.end('About')
    }
    else res.end(`
    <h1>OOPS!</h1>
    <p>error!</p>
    `)
}).listen(3000, () => console.log('http://localhost:3000'))

