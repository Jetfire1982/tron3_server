const express=require("express");

const config=require("config"); //этот модуль позволит нам в json файле создавать какие то настройки а затем получать их где надо, например мы получили оттуда номер порта

const path=require('path')

const app=express() //создаем объект приложения

app.use("/static", express.static(__dirname+"/static"));
app.use((req, res, next)=>{
    console.log("Middleware1")
    next();
})

app.get("/", (req, res)=>{
    res.send("<h3>Express!</h3>")
})

app.get("/test", (req, res)=>{
    res.send(`<h4 style="color:green; font-size: 30px">Test</h4>`)
})




// const testRouter=require("./routes/test.routes.js");


app.listen(3000)