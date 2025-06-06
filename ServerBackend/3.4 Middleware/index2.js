import express from "express";
import morgan from "morgan";
 
const  app = express();
const port =3000;

// Use the middleware  
app.use(morgan('short'));
 
//Server Handler start the server 
app.get('/', function (req, res) {
  res.send('hello, world!')
});

//Server Handler start the server 
app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
});