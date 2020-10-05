stock(28,7,10,8390,1451415315);
function stock(growrate,lamphat,sonam,dongtien,cplh){
var i;
var pe_future=[];
for (i = 0; i < sonam; i++) {
  pe_future[pe_future.length]=Math.ceil((dongtien*(1+growrate/100)**i));
}

var result = Math.ceil(1000000000 * NPV(lamphat,...pe_future)/cplh);
console.log(result);
}
function NPV(){
	    let npv = 0;
	    discountRate = arguments[0]/100; // Converting discount rate into percent
	    for (let i = 1; i < arguments.length; i++) {
	        npv += arguments[i] / Math.pow(1 + discountRate, i);
	    }
	    return Math.round(npv * 100) / 100;
	}
