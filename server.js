// modules
const express = require('express')
const cors = require('cors')
const path = require('path')

// app configuration
const app = express()
const PORT = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

// listen
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})