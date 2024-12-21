const Router = require("express")

const test2Router = new Router();


// console.log("p=",typeof(productRouter))

// const productRouter = express.Router();

test2Router.use("/test2", (req, res)=>{
    res.json({message:"Test2 is fine"})
})

// productRouter.use("/:id", (req, res)=>{
//     res.send("id товара = "+req.params["id"])
// })


// productRouter.use("/", (req, res)=>{
//     res.send("список товаров")
// })


module.exports = test2Router