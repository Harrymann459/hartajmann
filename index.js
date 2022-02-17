var express= require("express");
var app=express();
app.get("/",function(req,resp){
    resp.send("working fine");
})
app.listen(process.env.PORT||5000);
    
