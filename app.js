const express = require('express')
const people = require('./people')
const app = express()

app.use(express.static('./methods-public'))

// parse form data you must use urlencoded
app.use(express.urlencoded({extended:true}))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body    
    if(name) return res.status(201).json({success:true, person:name})
    res.send('Input some data!')

})

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => console.log('http://localhost:3000'))