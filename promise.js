const {readFile, writeFile} = require('fs').promises
// const {promisify} = require('util')

// const readFilePromise = promisify(readFile)
// const writeFilePromise = promisify(writeFile)

const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/amulgamated-1.txt', first+second)
    }catch(err){
        console.log(err)
        return
    }
}

start()


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const writeText = (path, data) => {
//     return new Promise((resolve, reject) => {
//         writeFile(path, data, (err) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve('Content Written!')
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((res) => console.log(res))
// .catch((err) => console.log(err))