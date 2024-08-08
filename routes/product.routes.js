
const Router = require("express")

const productRouter = new Router();


// console.log("p=",productRouter)

// const productRouter = express.Router();

productRouter.use("/create", (req, res)=>{
    res.send("добавление товара")
})

productRouter.use("/:id", (req, res)=>{
    res.send("id товара = "+req.params["id"])
})


productRouter.use("/", (req, res)=>{
    res.send("список товаров")
})


module.exports = productRouter
