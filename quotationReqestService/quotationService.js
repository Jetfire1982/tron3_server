 
// import fetch from 'node-fetch';
 const fetch = require('node-fetch');
 
 class QuotationService{
    constructor(){
        this._apiBase="http://quotes.instaforex.com/api/quotesTick?q=";
        this._firstSevenPairs="audcad,audchf,audjpy,audnzd,audusd,cadchf,cadjpy";
        this._secondSevenPairs="chfjpy,euraud,eurcad,eurchf,eurgbp,eurjpy,eurnzd";
        this._thirdSevenPairs="eurusd,gbpaud,gbpcad,gbpchf,gbpjpy,gbpusd,nzdcad";
        this._fourthSevenPairs="nzdchf,nzdjpy,nzdusd,usdcad,usdchf,usdjpy,gbpnzd";
        this.arr=[];
        this.audusd;
        this.audcad;
        this.audchf;
        this.audjpy;
        this.cadchf;
        this.cadjpy;
        this.audnzd;
        this.eurchf;
        this.eurgbp;
        this.eurjpy;
        this.chfjpy;
        this.euraud;
        this.eurcad;
        this.eurnzd;
        this.eurusd;
        this.gbpusd;
        this.nzdcad;
        this.gbpchf;
        this.gbpjpy;
        this.gbpnzd;
        this.gbpaud;
        this.gbpcad;
        this.nzdusd;
        this.usdcad;
        this.usdchf;
        this.usdjpy;
        this.nzdchf;
        this.nzdjpy;
    }

    async getQuotation(url){
        const res=await fetch(this._apiBase+url);
        if(!res.ok){
            throw new Error(`Could not fetch ${this._apiBase+url}, status: ${res.status}`);
        }
        const some=await res.json();
        return some;
    }


    async getQuotationAll(){
        let arrLocal=[];
        await this.getQuotation(this._firstSevenPairs).then(ans=>{arrLocal=arrLocal.concat(ans); return arrLocal;});
        await this.getQuotation(this._secondSevenPairs).then(ans=>{arrLocal=arrLocal.concat(ans); return arrLocal;});
        await this.getQuotation(this._thirdSevenPairs).then(ans=>{arrLocal=arrLocal.concat(ans); return arrLocal;});
        await this.getQuotation(this._fourthSevenPairs).then(ans=>{arrLocal=arrLocal.concat(ans); return arrLocal;});
    
        this.arr=arrLocal.slice();
        this.audusd=this.arr[0];  
        this.audcad=this.arr[1];  
        this.audchf=this.arr[2];
        this.audjpy=this.arr[3];
        this.cadchf=this.arr[4];
        this.cadjpy=this.arr[5];
        this.audnzd=this.arr[6];
        this.eurchf=this.arr[7];
        this.eurgbp=this.arr[8];
        this.eurjpy=this.arr[9];
        this.chfjpy=this.arr[10];
        this.euraud=this.arr[11];
        this.eurcad=this.arr[12];
        this.eurnzd=this.arr[13];
        this.eurusd=this.arr[14];
        this.gbpusd=this.arr[15];
        this.nzdcad=this.arr[16];
        this.gbpchf=this.arr[17];
        this.gbpjpy=this.arr[18];
        this.gbpaud=this.arr[19];
        this.gbpcad=this.arr[20];
        this.nzdusd=this.arr[21];
        this.usdcad=this.arr[22];
        this.usdchf=this.arr[23];
        this.usdjpy=this.arr[24];
        this.nzdchf=this.arr[25];
        this.nzdjpy=this.arr[26];
        this.gbpnzd=this.arr[27];
        return this.arr;
    }

    

   
}


module.exports = QuotationService;

// let quotation=new QuotationService();
// function test(){
//     quotation.getQuotationAll();
//     console.log(quotation.arr);
// }

// window.setInterval(test, 5000);






