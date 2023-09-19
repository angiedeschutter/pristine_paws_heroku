const db = require("../models")
const jwt = require('json-web-token')

const { Login } = db;
//sets the current user and token based on teh user id
async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode('asdljasldkfjs', token)
            const { id } = result.value
            let user = await Login.findOne({ 
                where: {
                    userId: id
                }
            })
            req.currentUser = user
        }
        next()
    } catch(err){
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser