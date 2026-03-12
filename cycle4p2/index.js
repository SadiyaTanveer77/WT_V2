const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const router = require('./route/bookRoute')
app.use('/books', router)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})
