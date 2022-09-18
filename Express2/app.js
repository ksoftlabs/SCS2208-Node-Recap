const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("ExpressJS Hello World!");
})

app.get('/test',(req,res)=>{
    res.send("Response from TEST GET route");
})

app.post('/test',(req,res)=>{
    res.send("Response from TEST POST route");
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})