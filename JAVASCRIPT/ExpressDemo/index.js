//Foundation
//gives us access to express and everything it has to offer
const express = require("express");
//creates an instance of server BUT we are calling it "app"
const app =express();
//depending on what port the host uses
const port = process.env.PORT || 3000;
console.log(process.env)
//Route Handler
//Root Route
app.get("/",(req,res)=>{
    res.json("my first server")
})
app.get("/fruit/:doggy/cat",(req,res)=>{
    res.send(req.params.doggy)
})

// /
// /login
// /login/hello

//we can use the same route as long as the methods are different
app.post("/",()=>{})
app.delete("/",()=>{})
app.put("/",()=>{})
//listener
app.listen(3000,()=> {
    console.log(`Express demo is running on port ${port}`)});