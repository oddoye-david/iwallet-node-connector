//Require neccessary modules
var soap = require('ef-soap');

function IWalletNode(nspace, wsdl, av, merchant_email, merchant_secret_key, service_type, integration_mode,proxy){
  this.nspace = nspace;
  this.wsdl = wsdl;

  this.soapHeader = Object({
	    "PaymentHeader":{
		    "APIVersion":av,
	       	    "MerchantEmail":merchant_email,
	            "MerchantKey":merchant_secret_key,
	       	    "SvcType":service_type,
	            "UseIntMode":integration_mode
	    }});
  this.proxy = proxy || null;

}


function getClient(wsdl,callback){
	soap.createClient(wsdl,function(err,client){
	       if(err)
	 		callback(err);
		return callback(null,client);
	});
}


//Callbacks are in the form

/*

function(err,result){
	//some code
}

*/
/*
 *args are objects with the required parameters for each method
 *Use describe() to know the arguments required
 * */

//1.mobilePaymentOrder
IWalletNode.prototype.mobilePaymentOrder = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.mobilePaymentOrder(arg,callback,this.proxy);
	 });
};
//2.processPaymentOrder
IWalletNode.prototype.processPaymentOrder = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.ProcessPaymentOrder(arg,callback,this.proxy);
	 });
};
//4.confirmTransaction
IWalletNode.prototype.confirmTransaction = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.ConfirmTransaction(arg,callback,this.proxy);
	 });
};
//5.generatePaymentCode
IWalletNode.prototype.generatePaymentCode = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.generatePaymentCode(arg,callback,this.proxy);
	 });
};

//6.verifyMobilePayment
IWalletNode.prototype.verifyMobilePayment = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.verifyMobilePayment(arg,callback,this.proxy);
	 });
};

//7.cancelTransaction
IWalletNode.prototype.cancelTransaction = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.CancelTransaction(arg,callback,this.proxy);
	 });
};
//8.checkPaymentStatus
IWalletNode.prototype.checkPaymentStatus = function(arg,callback) {
         getClient(this.wsdl,function(err,client){
	 	if(err)
		 	throw err;
	 	client.addSoapHeader(this.soapHeader);	
		client.checkPaymentStatus(arg,callback,this.proxy);
	 });
};
//10.buildOrderItem
IWalletNode.prototype.buildOrderItem = function(itemCode,itemName,unitPrice,quantity,subTotal){
	var orderItem = {"OrderItem":{
			   	 "ItemCode":itemCode,
			   	 "ItemName":itemName,
			   	"UnitPrice":unitPrice,
		        	 "Quantity":quantity,
	        	    	"SubTotal":subTotal
			    }
			};

	return orderItem;
};
//11.describe service
IWalletNode.prototype.describe = function(){
	 getClient(this.wsdl,function(err,client){
	 	client.addSoapHeader(this.soapHeader);	
		console.log(JSON.stringify(client.describe()));
	 });
};
//Export module
module.exports = IWalletNode;
