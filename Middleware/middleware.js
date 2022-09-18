logtime = (req,res,next)=>{
    console.log(Date.now());
    next();
}

module.exports={
    logtime:logtime
}