// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const cors = require('cors')
const path = require("path")
const { Sequelize } = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser')

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(defineCurrentUser)

// SEQUELIZE CONNECTION
//const sequelize = new Sequelize(process.env.DATABASE_URL)


// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public', 'build')));
}



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pristine Paws'
    })
})


// Controllers

app.use('/logins', require('./controllers/login_controller'))
app.use('/service', require('./controllers/service_controller'))
app.use('/auth', require('./controllers/authentication'))



try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  