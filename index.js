const express = require("express")
const app=express()
const port=8898

const array=[
    
{
    name:"john wick",
    age:"100"
},

{

  name:"Chana Juana",
  age:"20"  
}


]




app.get("/", (req,res)=>{
    res.send("Hola clase!")
})

app.get("/getNames", (req,res)=>{
    res.send(array)
})

app.get("/about",(req,res) =>{
    res.send("What do you want to know")
})


