const os = require('os')

// information of current user
console.log(os.userInfo())

// system uptime in seconds
console.log(os.uptime())

const curerntOS = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(curerntOS)