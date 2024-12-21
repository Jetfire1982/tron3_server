const express=require("express");

const config=require("config"); //этот модуль позволит нам в json файле создавать какие то настройки а затем получать их где надо, например мы получили оттуда номер порта

const path=require('path')

const app=express() //создаем объект приложения


const corsMiddleware=require("./middleware/cors.middleware")
const cors = require('cors');


// const QuotationService = require("./quotationReqestService/quotationService.js")   

// const quotation = new QuotationService();

// s(()=>{
    // quotation.getQuotation("audcad,audchf,audjpy,audnzd,audusd,cadchf,cadjpy,chfjpy,euraud,eurcad,eurchf,eurgbp,eurjpy,eurnzd,eurusd,gbpaud,gbpcad,gbpchf,gbpjpy,gbpusd,nzdcad,nzdchf,nzdjpy,nzdusd,usdcad,usdchf,usdjpy,gbpnzd").then(ans=>console.log("ans = ",ans))
    // quotation.getQuotation("audcad").then(ans=>console.log("ans = ",ans[0].ask))
// },1000)

// async function ttt(){
//     let ttt1 = await quotation.getQuotation("audcad")
//     console.log("ttt1 = ",ttt1)
//     return ttt1[0].ask
// }

// console.log("answer !!! = ", ttt().then(ans=>console.log("ans = ",ans)))
// ttt().then(ans=>console.log("ans = ",ans))

let analysisStongLevelStrategy = require('./modules/analysisStongLevelStrategy.js')
let quotationService = require('./quotationReqestService/startQuotationService.js');

// console.log("aucad=",quotationService.StartQuotationService())
// console.log("pairs = ",quotationService.pairs)
// quotationService.StartQuotationService()

// setInterval(()=>{
//     // console.log("audcad = ", require('./quotationReqestService/startQuotationService.js').pairs.audcad)
//     // console.log("aucad=",quotationService.StartQuotationService().audcad)
//     let data = quotationService.StartQuotationService().audcad
//     console.log("data = ", analysisStongLevelStrategy(data))
// },2000)

// let StartQuotationService= require('./quotationReqestService/startQuotationService.js');
// console.log("StartQuotationService=",StartQuotationService)


app.use(corsMiddleware)
// app.use(cors()) //функционал для обхода cors
app.use(express.json()) //т.к. по умолчанию Express не может распарсить json строку и это необходимо указать явно, что мы и делаем 



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

// console.log("p=", productRouter)


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

const test1Router = require("./routes/test1.routes.js")
// const test2Router = require("./routes/test2.routes.js");
// const authRouter = require("./routes/auth.routes.js");
// const { copyFileSync } = require("fs");
const authMiddleware = require("./middleware/auth.middleware");

app.use("/", authMiddleware, test1Router)
app.use("/", test2Router)
// app.use("/", authRouter)





// const testRouter=require("./routes/test.routes.js");


app.listen(3000)