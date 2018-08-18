class Cash {

    static  sum(...cash)
    {
        let money=0;
        cash.forEach((element)=>
    {
          
          money=money+element
    }) 
        return new Cash(money)
    }
    constructor(m)
    {
      this.m=m
     this.yuan=Math.floor(m/100);
      this.jiao=Math.floor((m-this.yuan*100)/10)
      this.fen=Math.floor((m-this.yuan*100-this.jiao*10))
    }
    plus(cash){
        return new Cash(this.m + cash.m);
    }
   
    toString()
    {
       return `${this.yuan}元${this.jiao}角${this.fen}分`
    }
    valueOf()
    {
        return this.m
    }
// 完成Cash类， 使打印结果为： 1元6角7分 1元6角7分 3元3角4分 167
}

const cash = new Cash(101);
const cash2 = new Cash(66);
const cash3 = cash.plus(cash2);
const cash4 = Cash.sum(cash, cash2);
const cash5 = Cash.sum(cash, cash2, cash3);
console.log(`${cash3} ${cash4} ${cash5} ${cash + cash2}`);
