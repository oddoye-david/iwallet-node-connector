iwallet-node
============

[iWallet](https://www.iwallet.com.gh/) is an online payment service platform for merchants and individuals to securely make and receive payments. iWallet works like a aggregator which has integration with various channels of payments including some mobile money channels.

This node module aims to reduce the amount of  code required to create an application which relies on iWallet for payment by exposing the actions(methods) provided by iWallet's SOAP API.


```javascript
var iwalletnode = require('iwallet-node');
var ns = 'http://www.i-walletlive.com/payLIVE';
var url = 'https://www.i-walletlive.com/paylive/paymentservice.asmx?wsdl';
var iwl = new iwalletnode(ns,url,"1.4","iwallet@dreamoval.com","bdVI+jtRl80PG4x6NMvYOwfZTZtwfN","C2B",true);
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
                "orderId":"1d04c8e9-bcad-4718-802c-630dce06bcd5",
	        "comment2": "xxxxxxxx",
      	        "comment1": "xxxxxxxx",
               	"subtotal":20
                };
iwl.processPaymentOrder(args,function(err,results){
      if (err)
	throw err;
     console.log(JSON.stringify(results));
});
```


Overview
--------

* mobilePaymentOrder : Function to make payment with extra features like QR code relevant for iwallet cruize app to complete payment
* processPaymentOrder : Function to make payment to iWallet
* confirmTransaction : Function to confirm the payment process after all operations have succeeded on both sides
* verifyMobilePayment: Function meant for mobile payment to call iWallet in order to check on the status of a transaction
* cancelTransaction : Function to cancel payment if your side of operation did not succeed. This initiates a refund proceed if iwallet was the payment channel
* checkPaymentStatus : Function to check status of payment made with third party payment channel line MTN etc.
* buildOrderItem : Helper function to build orderItem object.
* describe : Helper function to print out JSON version of the service WSDL.
 

Features
--------

- Provides an easy javascript interface for iWallet SOAP web service
- Parameters are passed by building simple JSON objects

Installation
------------

Install iwallet-node by running:
```
   npm install -g iwallet-node
```
Contribute
----------

- Issue Tracker: [https://www.github.com/v3rse/iwallet-node/issues](https://www.github.com/v3rse/iwallet-node/issues)
- Source Code: [https://www.github.com/v3rse/iwallet-node](https://www.github.com/v3rse/iwallet-node)



Test
-------

```
  npm test
```

Support
-------

If you are having issues, please let us know:
support@dreamoval.com

License
-------

The project is licensed under the [MIT](LICENSE) license.
