import express from 'express'
import path from 'path'
import open from 'open'

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
