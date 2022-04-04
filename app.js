const express = require("express")
const bodyParser= require("body-parser")
const app = express()
const port = 3000

app.set('view engine', 'ejs');

let today= new Date()
let current = today.getDate()
app.get('/',(req,res)=>{
    //res.sendFile(__dirname + '/index.html'); //to send a html file
    //res.send(today)
    res.render("list",{day: current})  //to render list.ejs
    //we sent the current variable with the name day
})
app.listen(port, ()=>{
    console.log("Listening")
})