import express from "express";
const app=express();
const port=3024;

// Sending back response to users 

let items=["Apples","Orange","Mango","Cherry","Banana"];
app.get("/",(req,res)=>{
  res.render("index.ejs",{fruits:items});
});
//Backend Server handler like listen() start the server 
app.listen(port,()=>{
    console.log(`Server is running on :${port}`);
});