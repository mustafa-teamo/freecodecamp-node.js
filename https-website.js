const { readFileSync } = require('fs')
const http = require('http')

const homePage = readFileSync('./navbar-app/index.html')
const aboutPage = readFileSync('./navbar-app/about.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeJS = readFileSync('./navbar-app/browser-app.js')
http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(aboutPage)
        res.end()
    }else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeJS)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/plain'})
        res.write('Page not found!')
        res.end()
    }
}).listen(3000, () => console.log('http://localhost:3000'))