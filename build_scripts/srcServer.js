const express = require('express')
const path = require('path')
const open = require('open')

const app = express()
const PORT = 1234

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    open(`http://localhost:${PORT}`) 
})