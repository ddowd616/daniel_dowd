//SERVER
//3 parts to a server

//FOUNDATION
const express = require("express")
//create an instance of our application
const app = express()
//this will help with routing and params
const logger = require("morgan");

const{bucketlist} = require("./mockData")

app.use(logger("dev"))

//what "station" (port) are we listening on?
const port = process.env.PORT || 3000;

//add a body parser (to control how the client sends us the data) these are the only two options for client so we
// are handling both cases
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//HANDLERS
//need a verb (route, cb())
// app.get("/",(req, res)=>{
//     //three options we know...send,end,or json to send a response
//     res.redirect("/home")
// })
// //set up handler for /home
// app.get("/home",(req,res)=>{
//     res.send("i am the home route")
// })
// app.get("/api/bucket/:id",(req, res)=>{
//     console.log(req)
//     res.send(`danky route with parameter: ${req.params.id}`)
// })

//READ route
app.get("/api/bucket",(req, res)=>{
    res.json(bucketlist)
})

//CREATE data route
let newId = 4;
app.post("/api/bucket",(req,res)=>{
    let newData = {
        id: newId++,
        description:req.body.description,
        isComplete:false
    }

    bucketlist.push(newData)
    let receipt = newData;
    res.json(receipt)
})
//LISTENER
app.listen(port, () => {
    console.log(`Bucketlist server running on port ${port}`)
})