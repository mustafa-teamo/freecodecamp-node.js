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

// app.post('/api/people', (req, res) => {
//     const {name} = req.body    
//     if(name) return res.status(201).json({success:true, person:name})
//     res.send('Input some data!')
// })

//post a person
app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if(name){
        // spread operator
        const updatedPeople = [...people, name]
        return res.status(201).send({success: true, data: updatedPeople})
    }
    res.status(400).send({sucess:false, data:[]})

})

//update
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body;
    // find selects an object element that suits a condition and returns it
    let person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.status(404).json({success: false, message: 'No person with ID: '+id})
    }
    // map applies a function to every element in the object
    const updatedPeople= people.map((person) => {
        if(person.id == id) {
            person.name = name
        }
        return person
    })    

    res.status(201).send({sucess:false, data:updatedPeople})
}) 

//delete 
//always convert json data to NUMBER() because data has integer and json sends a string so the filter wont work on ===
app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params
    const person = people.find((person) => person.id === Number(id))
    if(!person){
        return res.send({success: false, message: 'No person with ID: '+ id})
    }
    const updatedPeople = people.filter((person) => person.id !== Number(id))
    console.log(updatedPeople)
    res.status(200).send({success: true, data:updatedPeople})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => console.log('http://localhost:3000'))