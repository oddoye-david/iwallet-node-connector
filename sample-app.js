var iw = require('iwallet-node-connector');
var uuid = require('uuid');
var orderId = uuid.v1();
var mobileorder = uuid.v1();
var genorder = uuid.v1();
var soap = require("ef-soap");
var url = 'https://www.i-walletlive.com/paylive/paymentservice.asmx?wsdl';

var proxy = {
	proxy: "http://127.0.0.1:8888",
        strictSSL: false	
};

//Enter your merchant credentials
var iwl = new iw(url,"1.4","yourmerchant.email","yourmerchantkey","C2B",1,proxy);

/*Web Order:===============================================================================*/
//Response: {"ProcessPaymentOrderResult":"48018b5d-ddbf-464d-871b-13a25aed3eb2"}

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



iwl.processPaymentOrder(args,function(err,results){
	      if (err)
		    throw err;
     console.log(JSON.stringify(results));
});





/*Mobile Order:===========================================================================*/

//change order id
var args2 =  {
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
                "orderId":mobileorder,
	        "comment2": "xxxxxxxx",
      	        "comment1": "xxxxxxxx",
               	"subtotal":20
                };


//Response: {"mobilePaymentOrderResult":{"success":true,"token":"02a5cda3-ce35-478d-9309-f5bf6e2eeb3b","imageUrl":"http://54.173.0.222:8081//download/qrcodes/QptJ3b.png","orderCode":"QptJ3b"}}


iwl.mobilePaymentOrder(args2,function(err,results){
	      if (err)
		    throw err;
     console.log(JSON.stringify(results));
	

    //Verify mobile order after payment:
    //Response: {"verifyMobilePaymentResult":{"success":true,"token":"01da49fd-4e9f-4de2-b350-c0b08883eccb","imageUrl":"http://54.173.0.222:8081//download/qrcodes/Yc6p3A.png","orderCode":"Yc6p3A","status":"NEW","transactionId":{}}}
    iwl.verifyMobilePayment({"orderId":mobileorder},function(err,results){
	      if (err)
		    throw err;
              console.log(JSON.stringify(results));
    });
});





/*Generate Payment Code:===================================================================*/
//You may have to add your phone number below
var args3 =  {
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
                "orderId":genorder,
	        "comment2": "xxxxxxxx",
      	        "comment1": "xxxxxxxx",
               	"subtotal":20,
		"payerMobile":"Some Phone Number",
		"payerName" : "Some Dude",
		"providerName" : "MTN_money",
		"providerType" : " "
                };


//change up the args
//{"generatePaymentCodeResult":"Please check your phone for a prompt"}
iwl.generatePaymentCode(args3,function(err,results){
	      if (err)
		    throw err;
     console.log(JSON.stringify(results));
    //Response: {"checkPaymentStatusResult":"NEW"}
     iwl.checkPaymentStatus({"orderId":genorder,"providerName":"MTN_money","providerType":" "},function(err,results){
	      if (err)
		    throw err;
              console.log(JSON.stringify(results));
    });
});






