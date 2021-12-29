require('dotenv').config()
const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')
const passport = require('passport')
const cors = require('cors')


const app = express()

app.use(cors())

app.use(passport.initialize());
app.use(express.json())


connectDB()

app.use("/user", user)

const PORT = process.env.PORT || process.env.port

app.listen(PORT, err => {
    err ? console.log("Server connection failed", err)
        : console.log(`Server is running on port ${PORT}`)
})