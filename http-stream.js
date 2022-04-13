const http = require('http')
const {createReadStream, readFile} = require('fs')

http.createServer((req, res) => {
    const fileStream = createReadStream('./content/big.txt', {encoding:'utf-8'})
    fileStream.on('open', (data) => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (error) => {
        res.end(error)
    })
}).listen(3000)

// http.createServer((req, res) => {
//     readFile('./content/big.txt', 'utf-8', (err, data) => {
//         if(err){
//             res.end(err)
//         }else{
//             res.end(data)
//         }
//     })
// }).listen(3000)