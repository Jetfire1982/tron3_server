const QuotationService = require("./quotationService.js")  


let audusd, audcad=1, audchf, audjpy, cadchf,
    cadjpy, audnzd, eurchf, eurgbp, eurjpy, chfjpy,
    euraud, eurcad, eurnzd, eurusd, gbpusd, nzdcad,
    gbpchf, gbpjpy, gbpaud, gbpcad, nzdusd, usdcad,
    usdchf, usdjpy, nzdchf, nzdjpy, gbpnzd;

// let audusdCurrent, audcadCurrent, audchfCurrent, audjpyCurrent, cadchfCurrent,
//     cadjpyCurrent, audnzdCurrent, eurchfCurrent, eurgbpCurrent, eurjpyCurrent, chfjpyCurrent,
//     euraudCurrent, eurcadCurrent, eurnzdCurrent, eurusdCurrent, gbpusdCurrent, nzdcadCurrent,
//     gbpchfCurrent, gbpjpyCurrent, gbpaudCurrent, gbpcadCurrent, nzdusdCurrent, usdcadCurrent,
//     usdchfCurrent, usdjpyCurrent, nzdchfCurrent, nzdjpyCurrent;

let quotation = new QuotationService();

function StartQuotationService() {
   
    quotation.getQuotationAll();
    audusd = quotation.audusd;
    audcad = quotation.audcad;
    audchf = quotation.audchf;
    audjpy = quotation.audjpy;
    cadchf = quotation.cadchf;
    cadjpy = quotation.cadjpy;
    audnzd = quotation.audnzd;
    eurchf = quotation.eurchf;
    eurgbp = quotation.eurgbp;
    eurjpy = quotation.eurjpy;
    chfjpy = quotation.chfjpy;
    euraud = quotation.euraud;
    eurcad = quotation.eurcad;
    eurnzd = quotation.eurnzd;
    eurusd = quotation.eurusd;
    gbpusd = quotation.gbpusd;
    nzdcad = quotation.nzdcad;
    gbpchf = quotation.gbpchf;
    gbpjpy = quotation.gbpjpy;
    gbpnzd = quotation.gbpnzd
    gbpaud = quotation.gbpaud;
    gbpcad = quotation.gbpcad;
    nzdusd = quotation.nzdusd;
    usdcad = quotation.usdcad;
    usdchf = quotation.usdchf;
    usdjpy = quotation.usdjpy;
    nzdchf = quotation.nzdchf;
    nzdjpy = quotation.nzdjpy;

    if ((audusd != undefined) && (audcad != undefined) && (audchf != undefined) && (audjpy != undefined) && (cadchf != undefined) &&
        (cadjpy != undefined) && (audnzd != undefined) && (eurchf != undefined) && (eurgbp != undefined) && (eurjpy != undefined) && (chfjpy != undefined) &&
        (euraud != undefined) && (eurcad != undefined) && (eurnzd != undefined) && (eurusd != undefined) && (gbpusd != undefined) && (nzdcad != undefined) &&
        (gbpchf != undefined) && (gbpjpy != undefined) && (gbpaud != undefined) && (gbpcad != undefined) && (nzdusd != undefined) && (usdcad != undefined) &&
        (usdchf != undefined) && (usdjpy != undefined) && (nzdchf != undefined) && (nzdjpy != undefined) && (gbpnzd != undefined)) {
        //MT4
        // audusd = audusd.bid-0.0002;
        // audcad = audcad.bid+0.0002;
        // audchf = audchf.bid;
        // audjpy = audjpy.bid+0.05;
        // cadchf = cadchf.bid+0.0003;
        // cadjpy = cadjpy.bid+0.01;
        // audnzd = audnzd.bid+0.00065;
        // eurchf = eurchf.bid;
        // eurgbp = eurgbp.bid;
        // eurjpy = eurjpy.bid+0.02;
        // chfjpy = chfjpy.bid+0.08;
        // euraud = euraud.bid-0.0005;
        // eurcad = eurcad.bid;
        // eurnzd = eurnzd.bid+0.0004;
        // eurusd = eurusd.bid-0.0001;
        // gbpusd = gbpusd.bid;
        // nzdcad = nzdcad.bid+0.0003;
        // gbpchf = gbpchf.bid;
        // gbpjpy = gbpjpy.bid+0.01;
        // gbpaud = gbpaud.bid+0.0003;
        // gbpcad = gbpcad.bid+0.0004;
        // nzdusd = nzdusd.bid+0.0002;
        // usdcad = usdcad.bid;
        // usdchf = usdchf.bid;
        // usdjpy = usdjpy.bid-0.02;
        // nzdchf = nzdchf.bid+0.0002;
        // nzdjpy = nzdjpy.bid+0.03;

        //INTRADE BAR & Pocket option
        audusd = audusd.bid - 0.0002;
        audcad = audcad.bid + 0.0004;
        audchf = audchf.bid + 0.0001;
        audjpy = audjpy.bid + 0.06;
        cadchf = cadchf.bid + 0.0003;
        cadjpy = cadjpy.bid + 0.02;
        audnzd = audnzd.bid + 0.0008;
        eurchf = eurchf.bid + 0.0001;
        eurgbp = eurgbp.bid + 0.0001;
        eurjpy = eurjpy.bid + 0.05;
        chfjpy = chfjpy.bid + 0.14;
        euraud = euraud.bid + 0.0002;
        eurcad = eurcad.bid - 0.0003;
        eurnzd = eurnzd.bid + 0.0005;
        eurusd = eurusd.bid;
        gbpusd = gbpusd.bid + 0.0001;
        nzdcad = nzdcad.bid + 0.0003;
        gbpchf = gbpchf.bid + 0.0003;
        gbpjpy = gbpjpy.bid + 0.03;
        gbpnzd = gbpnzd.bid + 0.0006;
        gbpaud = gbpaud.bid + 0.0006;
        gbpcad = gbpcad.bid + 0.0005;
        nzdusd = nzdusd.bid + 0.0005;
        usdcad = usdcad.bid + 0.0001;
        usdchf = usdchf.bid + 0.0001;
        usdjpy = usdjpy.bid - 0.01;
        nzdchf = nzdchf.bid + 0.0003;
        nzdjpy = nzdjpy.bid + 0.04;
   
        
    }
    return {
        audusd, audcad, audchf, audjpy, cadchf,
        cadjpy, audnzd, eurchf, eurgbp, eurjpy, chfjpy,
        euraud, eurcad, eurnzd, eurusd, gbpusd, nzdcad,
        gbpchf, gbpjpy, gbpnzd, gbpaud, gbpcad, nzdusd,
        usdcad, usdchf, usdjpy, nzdchf, nzdjpy
    };
   
    // setTimeout(StartQuotationService, 1000);
}
// StartQuotationService();

exports.StartQuotationService = StartQuotationService
// exports.pairs = {
//     audusd, audcad, audchf, audjpy, cadchf,
//     cadjpy, audnzd, eurchf, eurgbp, eurjpy, chfjpy,
//     euraud, eurcad, eurnzd, eurusd, gbpusd, nzdcad,
//     gbpchf, gbpjpy, gbpnzd, gbpaud, gbpcad, nzdusd,
//     usdcad, usdchf, usdjpy, nzdchf, nzdjpy
// };






// export {
//     audusdCurrent, audcadCurrent, audchfCurrent, audjpyCurrent, cadchfCurrent,
//     cadjpyCurrent, audnzdCurrent, eurchfCurrent, eurgbpCurrent, eurjpyCurrent, chfjpyCurrent,
//     euraudCurrent, eurcadCurrent, eurnzdCurrent, eurusdCurrent, gbpusdCurrent, nzdcadCurrent,
//     gbpchfCurrent, gbpjpyCurrent, gbpaudCurrent, gbpcadCurrent, nzdusdCurrent, usdcadCurrent,
//     usdchfCurrent, usdjpyCurrent, nzdchfCurrent, nzdjpyCurrent
// };