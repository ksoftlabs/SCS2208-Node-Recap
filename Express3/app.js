const express=require('express');
const app = express();
const port=8080;
const users=require('./users');

app.use('/users',users);


app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})