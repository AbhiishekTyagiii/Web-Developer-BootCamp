import express from "express";

const app = express();
const port = 3000;

// Custom middleware 
function logger(req,res,next){
  console.log("Request method:",req.method);
  console.log("Request URL:",req.url);
  next(); // Pass the flow to the server handler 
}

// Use of Custom middleware
app.use(logger);

//Server Handler 
app.get("/", (req, res)=>{
  res.send("Hello");
});

//Server Handler 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
