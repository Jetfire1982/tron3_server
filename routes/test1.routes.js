const Router = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const test1Router = new Router();


// console.log("p=",typeof(productRouter))

// const productRouter = express.Router();

test1Router.use("/test1", (req, res)=>{
    
    res.json({ob1: {message:"Test1 is fine"}, ob2:{message2:"Test2 is fine"}})
})

test1Router.use("/test11", (req, res)=>{
    console.log("request")
    res.send("Fine")
})

test1Router.use('/testAuth', authMiddleware, (req,res)=>{
    console.log("req.user =", req.user, " req.method =", req.method)
    // if(req.method != "OPTIONS"){
    // console.log("req.user =", req.user, " req.method =", req.method)
  
    // }
    res.json({message:"Test auth is fine"})
})

test1Router.post("/test3", (req, res)=>{
    console.log("request test3")
    const{test}=req.body
    console.log("body = ", req.body)
    
    res.send("Fine")
})

test1Router.post("/password", (req, res)=>{
    console.log("request test3")
    const{test}=req.body
    console.log("body = ", req.body)
    
    //res.send("Fine")
    res.json({message: req.body.password})
})

// productRouter.use("/:id", (req, res)=>{
//     res.send("id товара = "+req.params["id"])
// })


// productRouter.use("/", (req, res)=>{
//     res.send("список товаров")
// })


module.exports = test1Router