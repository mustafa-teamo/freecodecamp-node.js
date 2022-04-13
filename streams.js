const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark:90000, encoding:'utf-8'})

stream.on('data', (data) => {
    console.log(data)
})

stream.on('error', (error) => {
    console.log(error)
})