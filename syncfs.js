const {readFileSync, writeFileSync} = require('fs')
console.log('start')
// stores in a variable instead of calling a callback
const first = readFileSync('./content/first.txt', "utf-8")
// const second = readFileSync('./content')
console.log(first)
writeFileSync('./content/result-sync.txt', 'Here is the actual meaningful data! : '+first)
// append
writeFileSync('./content/result-sync.txt', 'Appended should be not gibberishyyixx!?', {flag: 'a'})
console.log('done with the task')
console.log('starting next task')