const express = require('express')
const res = require('express/lib/response')
// const path = require('path')
const app = express()
const content = require('./content.js')

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.get('/home', (req, res) => {
    res.send('<h1>Home</h1> <a href = "/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = content.map((product) => {
        return {id, name, image} = product;
     })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = content.find((product) => product.id == productID)
    if(singleProduct)
        res.json(singleProduct)
    else
        res.status(404).send('<h1>Product not found!</h1>')
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    //http://localhost:3000/api/products/rec6d6T3q5EBIdCfD/reviews/2    
    const {productID, reviewID} = req.params
    const product = content.find((product) => product.id == productID)
    const review = product.reviews.find((review) => review.id == reviewID)
    res.json(review)
})

app.get('/api/v1/query', (req, res) => {
    //http://localhost:3000/api/v1/query?id=1&name=asim
    const query = req.query
    res.json(query)
})

app.get('/api/v2/query', (req, res) => {
    //http://localhost:3000/api/v2/query?search=B&limit=3
    const {search, limit} = req.query
    let sortedProducts = [...content]
    console.log(sortedProducts)
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, limit)
    }

    res.status(200).json({sucess:true, data:sortedProducts})
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>OOPS!</h1><p>Page not found!</p>')
})


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))