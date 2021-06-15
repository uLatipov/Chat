const express = require('express')
const path = require('path')
const {PORT, host} = require('./config.js')
const app = express()
const {GET} = require("./controllers/home.js")


app.use(express.static(__dirname + '/public'))
app.get("/", (req, res)=>{
    res.sendFile(path.join(process.cwd() + "/src" + "/views" + "/index.html"))
})

app.listen(PORT, ()=> console.log(`Server is runing on https://${host}:${PORT}`))