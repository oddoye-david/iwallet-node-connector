var iw = require('./index');
var orderId = require('uuid').v1();
var url = 'https://www.i-walletlive.com/paylive/paymentservice.asmx?wsdl';
//var url = 'http://54.173.0.222:8081/webservices/paymentservice.asmx?wsdl';
var ns = 'http://www.i-walletlive.com/payLIVE';

var args =  {
		"taxAmount":5,
		"total":35,
                "orderItems":[{"OrderItem":{
			   	 "ItemCode":"something",
			   	 "ItemName":"something",
			   	"UnitPrice":10,
		        	 "Quantity":2,
	                	"SubTotal":20
		    }}
		    ],
		"shippingCost":10,
                "orderId":orderId,
	        "comment2": "xxxxxxxx",
      	        "comment1": "xxxxxxxx",
               	"subtotal":20
                };
var proxy = {
	proxy: "http://127.0.0.1:8888",
        strictSSL: false	
};


var iwl = new iw(ns,url,"1.4","iwallet@dreamoval.com","bdVI+jtRl80PG4x6NMvYOwfZTZtwfN","C2B",1,proxy);
//iwl.describe();

iwl.processPaymentOrder(args,function(err,results){
	      if (err)
		    throw err;
     console.log(JSON.stringify(results));
});
