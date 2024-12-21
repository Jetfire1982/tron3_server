
const express=require("express");
const EventEmitter = require('events');

const config=require("config"); //этот модуль позволит нам в json файле создавать какие то настройки а затем получать их где надо, например мы получили оттуда номер порта

const path=require('path')

const corsMiddleware=require("./middleware/cors.middleware")


// const testX = require('./handlers/handlers.js')

const app=express() //создаем объект приложения
app.use(corsMiddleware)

const emitter = new EventEmitter();
// emitter.on('server_start_stop', (x) => {
//     console.log("Test server_start_stop well done!, x=", x, " status = ", status)
//     testX();

// })
// emitter.on('test1', (x) => {
//     console.log("Test test1 well done!, x=", x, " status = ", status)
// })
// emitter.on('test2', (x) => {
//     console.log("Test test2 well done!, x=", x, " status = ", status)
// })
module.exports = emitter
const startHandlers = require('./handlers/startHandlers.js')
startHandlers()


// const cors = require('cors');
// app.use(cors()) //функционал для обхода cors

// let QuotationService = require('./quotationReqestService/quotationService.js');
let analysisStrongLevelStrategy = require('./modules/analysisStongLevelStrategy.js')
// let quotationService = new QuotationService() 

// quotationService.getQuotationAll().then(arr=>{console.log("arr = ",arr[0].bid); return arr[0].bid}).then(ans=>console.log("answer = ",analysisStrongLevelStrategy(ans)))
                                                                                                                                                                       
// console.log("data = ", data)
    // console.log("data = ", analysisStongLevelStrategy(data))

    // quotationService.getQuotationAll().then(arr=>{console.log("arr = ",arr.length)})



    const status = require('./status.js')







console.log("secret key = ",config.get('secretKey'))






app.get("/start", (req, res)=>{
    
 

    // res.send("<h3>Timer starting activated!</h3>")
    res.json({message:"Timer starting activated!"})
})


app.get("/stop", (req, res)=>{
    clearInterval(time)
    console.log("STOP ticking!")
    // res.send("<h3>Stop activated!</h3>")
    res.json({message:"Stop activated!"})
})




const test1Router = require("./routes/test1.routes.js")
const authRouter = require("./routes/auth.routes.js")
const controlRouter = require("./routes/control.routes.js");
const { stat } = require("fs");





app.use("/", authRouter)
app.use("/", controlRouter)
app.use("/", test1Router)

app.listen(3000)