//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8090;

//Use the middleWare body-parser(PRE-PROCESSING).
app.use(bodyParser.urlencoded({extended:true}));


//getting back something from the server 
app.get("/", (req, res) => {
  // console.log(__dirname+"/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

//Sending to the server like data  Password.
app.post("/check", (req, res) => {
   // Check Password 
     var pas=req.body.password;
          if(pas=== "ILoveProgramming"){
          res.sendFile(__dirname + "/public/secret.html");
          console.log(pas);
       }
        else{
         res.sendFile(__dirname + "/public/index.html");
         console.log(pas);
    }
    console.log(pas);
   });
  
// Start the server 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

