// const EventEmitter = require('events');
const testX = require('./handlers.js')
const emitter = require('../index2.js')
const status  = require('../status.js');
let currentPairPrices = require('../currentPairPrices.js')
const QuotationService = require('../quotationReqestService/quotationService.js');

function startHandlers() {

    let t
    let tt;
    let timer = 0;
    let quotationService = new QuotationService();


    // const emitter = new EventEmitter();
    emitter.on('server_start_stop', (x) => {
        console.log("Test server_start_stop well done!, x=", x, " status = ", status)
        if(status.server_start_stop){
            t = setInterval(()=>{
                timer+=1
                tt = testX(quotationService).then(ans => {
                    console.log("ans  =",ans[0]);
                    ans.forEach((elem,i) => {
                        currentPairPrices[elem.symbol]=elem;
                        // currentPairPrices[i].my_correction_price = 27;
                    });
                });
                // if(tt){
                //     console.log("tick, timer = ",timer, " Price = ", tt[0])
                // }
                // else{
                    console.log("tick, timer = ",timer)
                // }
              
                
            },5000)
        }else{
            timer = 0;
            console.log("Stop timer")
            clearInterval(t)
        }

      
        


    })
    emitter.on('test1', (x) => {
        console.log("Test test1 well done!, x=", x, " status = ", status)
    })
    emitter.on('test2', (x) => {
        console.log("Test test2 well done!, x=", x, " status = ", status)
    })
}

module.exports = startHandlers; 