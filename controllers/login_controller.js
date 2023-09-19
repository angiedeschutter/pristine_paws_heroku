const login = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { Login } = db

//find all users in the login database
login.get('/', async (req, res) => {
    try {
        const foundLogin = await Login.findAll()
        res.status(200).send('login')
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find users')
    }
})

// creates a new user and hashes the password with bcrypt
login.post('/', async (req, res) => {
    try {
        let{password, ...rest}=req.body
        const user = await Login.create({ 
            ...rest, 
            password: await bcrypt.hash(password, 10)
        })
        res.json(user)
    } catch (Error) {
        res.status(500).json(Error)
    }
})

module.exports=login