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

// sequelize connection with env variables
let dbUrl = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_DATABASE}`

//sets the sequelize connection for Heroku
const sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl:{
            require: true, 
            rejectUnauthorized: false
        }
    }
})

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


//confirms if sequelize is able to connect to the database 
try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.DATABASE_URL}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

//redirects the build file so routes will work
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)

  })
  