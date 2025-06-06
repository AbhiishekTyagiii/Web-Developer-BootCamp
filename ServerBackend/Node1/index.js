// Native node modules

// 1.File system (writefile() on the local system );

// Import the filesystem module
const fs=require("fs");

//writeFile() from the local system file 
fs.writeFile("Sending.txt","Hello Abhishek stay strong!!",(err) => {
    if (err){
        console.error("Invalid file name",err.message);
    }
    console.log('The file has been saved!');
  });

//readFile() from the local system
fs.readFile("./test/message.txt", "utf8", (err, data) => {
    if (err){
        console.error("Invalid File name",err.message);
    }
    console.log("Data read from the local file\n",data);
  });

//readdir()  
fs.readdir("../GeeksforGeeks",(err, filesList) => {
    if (err){
       console.error("Invalid Path Error",err.message);
        }
     else{ 
      console.log("Files in the Directory\n",filesList);
    } 
});

//mkdir()
const path = require('path');
fs.mkdir(path.join(__dirname, 'Amazing1'),(err) => {
       if (err) {
              console.error(err.message);
         }
         console.log('Directory created successfully!');
     }); 

     