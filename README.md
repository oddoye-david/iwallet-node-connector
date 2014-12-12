iwallet-node
============

This is a node module to easy integration with iWallet in node projects



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

- Issue Tracker: github.com/v3rse/iwallet-node/issues
- Source Code: github.com/v3rse/iwallet-node 


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


Release History
-------

* 0.1.0 Initial release
