
const status = require('../status.js')
const emitter = require('../index2.js')
let currentPairPrices = require('../currentPairPrices.js')

async function  testX(quotationService){
    console.log("test X well done status.server_start_stop = ",status.server_start_stop)
    let t = await quotationService.getQuotationAll()
    // console.log("t = ",t[0])
    // .then(ans => {currentPairPrices = ans;})
    return t;
  
}


module.exports = testX