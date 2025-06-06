import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
//res.send("<h1>Enter your name below</h1>");
let checker=true;
res.render("index.ejs",{print:checker});
});

app.post("/sub", (req, res) => {
    const l1=req.body.fName.length;
    const l2=req.body.lName.length;
    const sum=l1+l2;
   res.render("index.ejs",{tot:sum});
  //console.log(`Total length=${sum}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
