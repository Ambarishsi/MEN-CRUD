require('./modals/db');

const express = require('express')
const path = require('path')
var clients = require('./routes/clientRoutes');


const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.listen(5000, () => {
    console.log('listning at', 5000)
})

app.use('/clients/v1', clients);