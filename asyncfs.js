const { readFile, writeFile } = require('fs')
console.log('start')
// does not stores in a variable but calls a callback to make node asynchronous
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return 
    }
    const first = result;
    console.log({first: first})
    readFile('./content/subfolder/test.txt', 'utf8', (err, data) => {
        if(err){
            console.log(err)
            return
        }
        const second = data;
        console.log({second: second})
        writeFile('./content/newFile.txt', 'Here is a result : ' + first + ' ' + second, (err)  => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with the task')
        })
    })
})

console.log('starting the next task!')