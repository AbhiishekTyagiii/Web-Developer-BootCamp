import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8090;

//Use the middleWare body-parser(PRE-PROCESSING).
app.use(bodyParser.urlencoded({extended:true}));

// getting back something from the server 
app.get("/", (req, res) => {
     //console.log(__dirname);
    res.sendFile(__dirname +"/index.html");
  });

// Handle the server post request 
app.post("/submit", (req, res) => {
       const  dat=new Date();
       const day = dat.getDay();
       console.log(day);
       res.render("index.ejs",{
       dayType: "a weekday",
       advice: "it's time to work hard",
      });
         


    });

//Start the server 
app.listen(port,()=>{
    console.log(`Server is Lisning on ${port}`);
})  