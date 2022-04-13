// middleware = 02

const authorize = (req, res, next) => {
    const {user} = req.query
    if(user == 'jhon' || user == 'Jhon'){ 
        req.user = {id: 1, name: user} 
        next()    
    }else{
        res.status(401).send("Unauthorized")
    }
}

module.exports = authorize