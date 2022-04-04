const express = require("express")
const bodyParser= require("body-parser")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

let today= new Date()
app.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname, '/index.html')); to send a html file
    res.send(today)
})

app.listen(port, ()=>{
    console.log("Listening")
})