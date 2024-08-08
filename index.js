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

app.get("/query", (req, res)=>{
    let id = req.query.id;

    res.send("<h3>Express + query!</h3><h4>id = "+id+"</h4>")
})


app.get("/params/:nameAuthor", (req, res)=>{
    let name = req.params["nameAuthor"]

    res.send("<h3>Express + params!</h3><h4>Name = "+name+"</h4>")
})


app.get("/test", (req, res)=>{
    res.send(`<h4 style="color:green; font-size: 30px">Test</h4>`)
})


// const productRouter = express.Router();

// console.log("p=",productRouter)


// productRouter.use("/create", (req, res)=>{
//     res.send("добавление товара")
// })

// productRouter.use("/:id", (req, res)=>{
//     res.send("id товара = "+req.params["id"])
// })


// productRouter.use("/", (req, res)=>{
//     res.send("список товаров")
// })

const productRouter = require("./routes/product.routes.js")

app.use("/products", productRouter)





// const testRouter=require("./routes/test.routes.js");


app.listen(3000)