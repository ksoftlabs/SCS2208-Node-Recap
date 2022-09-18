const express=require('express');
const middleware=require('./middleware');
const app = express();
const port=8080;

app.use(middleware.logtime);

app.get('/',(req,res)=>{
    res.send("ExpressJS Middleware Demo!");
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})