const express = require('express');

const app = express();

app.get('/',(req, resp)=>{
    resp.send("<h1>Hello People this is node js using Docker.</h1>")
})

app.listen(3000, ()=>{
    console.log("Server is running on port no 3000");
})