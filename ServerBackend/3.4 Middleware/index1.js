import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

//Use the middleWare body-parser(PRE-PROCESSING).
app.use(bodyParser.urlencoded({extended:true}));


//getting back something from the server 
app.get("/", (req, res) => {
  // console.log(__dirname+"/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

//Sending to the server like data username, Password.
app.post("/submit", (req, res) => {
  //Print the username,Password on the console screen 
    console.log(req.body);
   });

// Start the server 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
