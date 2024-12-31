const Router = require("express");
const express = require("express");

const jsonParser = express.json()
const controlRouter = new Router();

const status = require('../status.js')
const emitter = require('../index2.js');
const currentPairPrices = require("../currentPairPrices.js");



controlRouter.use('/control', jsonParser, (req, res) => {

    console.log("you are enter to control req.method=", req.method)
    console.log("you are enter to control req.body=", req.body)
    if (req.body.key) {
        status[req.body.key] = req.body.value
        emitter.emit(req.body.key, req.body.value)
    }

    // }
    // res.json(status)
    res.json({[req.body.key]:status[req.body.key]})
    // res.json((JSON.stringify(res.body)))
})


controlRouter.use('/getprices', jsonParser, (req, res) => {

    // console.log("you are enter to getPrice req.method=", req.method)
    // console.log("you are enter to getPrice req.body=", req.body)
  
    console.log("currentPairPrices=", currentPairPrices[0])
    let ob = {test: "ok"}

    // }
    res.json(currentPairPrices)
    // res.json((JSON.stringify(res.body)))
})


module.exports = controlRouter