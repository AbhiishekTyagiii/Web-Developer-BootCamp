import express from "express";
const app=express();
const port=3500;

//Print the request on the console
//  app.get("/",(req,res)=>{
//      console.log(req.rawHeaders);
//  })

//Handle the HTTP Request 
 app.get("/",(req,res)=>{
     res.send("<h1 style='color:green'>Hello World Abhishek!!!</h1>");
 });

//Handle the request for Endpoint "/about"
 app.get("/contact",(req,res)=>{
    res.send("<h1 style='color:Blue'>Contact me:</h1></br> <p style='color:red'>Phone no:7302963673</p>");
    
 })

//Handle the request for Endpoint "/contact"
app.get("/about",(req,res)=>{
    res.send("<h1 style='color:firebrick'>About Me</h1></br><p style='color:green'>My name is Abhishek Tyag,I am from Chhapar.</p>");

});

app.listen(port,()=>
{
  console.log(`Server is running on port=${port}`);  
});