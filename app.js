const express = require('express');
const app = express();

app.get('/api', (req,res)=>{
  res.send("Backend API working");
});

app.listen(5000, ()=>{
 console.log("Server running on port 5000");
});
