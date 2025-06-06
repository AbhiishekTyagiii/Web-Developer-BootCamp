import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 9080;

//Use the middleWare body-parser(PRE-PROCESSING).
app.use(bodyParser.urlencoded({extended:true}));


//getting back something from the server 
app.get("/", (req, res) => {
  // console.log(__dirname+"/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

//Sending to the server like data username, Password.
app.post("/submit",function (req, res){
// Get the username,Password using body-parser middleware(req.body). 
   var bandName = req.body["street"] + req.body["pet"];
   res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Start the server
app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
