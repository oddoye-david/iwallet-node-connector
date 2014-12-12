var should = require('chai').should(),
    iwallet = require('../index.js'),
    uuid = require('uuid');

var ns = 'http://www.i-walletlive.com/payLIVE';
var url = 'https://www.i-walletlive.com/paylive/paymentservice.asmx?wsdl';

var orderItem;
var args = {
		"taxAmount":5,
		"total":295,
                 "orderItems":[],
		"shippingCost":10,
                "orderId": "",
	        "comment2": "TEST",
      	        "comment1": "TEST",
               	"subtotal":280
             };




//Put your proxy here if you need it
/*var proxy = {
	proxy: "http://127.0.0.1:8888",
        strictSSL: false	
};
*/
var proxy = null;

//Initialise 
//Please enter your email and key
var iw = new iwallet(url,"1.4","yourmerchant.email","yourmerchantkey","C2B",1,proxy);







//Test Suite
describe('Module utility function',function(){
	it('builds an order item object from the arguments passed',function(){
		orderItem = iw.buildOrderItem("conv1","Converse All-Star",140,2,280);
		orderItem.should.have.property("OrderItem");
		orderItem.OrderItem.ItemName.should.equal("Converse All-Star");	
		args.orderItems.push(orderItem);
	});
});


describe('Module',function(){


//Test specific time for async adjust when necessary
		this.timeout(10000);
	
	it("can run mobilePaymentOrder action",function(done){

		args.orderId = uuid.v1();
                iw.mobilePaymentOrder(args,function(err,result){
	             if (err)
			return done(err);
	             result.should.have.property("mobilePaymentOrderResult");
		     result.mobilePaymentOrderResult.success.should.be.a('boolean');
		     result.mobilePaymentOrderResult.success.should.equal(true);
		     done();
		});
	});
	


	
	it("can run verifyMobilePayment action",function(done){
	     iw.verifyMobilePayment({"orderId":args.orderId},function(err,result){
	           if (err)
			return done(err);
		   result.should.have.property("verifyMobilePaymentResult");
                   result.verifyMobilePaymentResult.success.should.be.a('boolean');
		   result.verifyMobilePaymentResult.success.should.equal(true);
		   done();
            });
	});
	


	it("can run ProcessPaymentOrder action",function(done){

		args.orderId = uuid.v1();
		iw.processPaymentOrder(args,function(err,result){
			if(err)
				return done(err);
			result.should.have.property("ProcessPaymentOrderResult");
			result.ProcessPaymentOrderResult.should.be.a('string');
			done();
		});
			
	});


	
	it("can run generatePaymentCode action",function(done){
	
		//Enter Phone Number
		args.orderId = uuid.v1();
		args.payerMobile = 'xxxxxxxxx';
		args.payerName = 'MTN_money';
		args.providerName = 'v3rse';
		args.providerType = ' ';
		iw.generatePaymentCode(args,function(err,result){
			if(err)
				return done(err);
			result.should.have.property("generatePaymentCodeResult");
			result.generatePaymentCodeResult.should.be.a('string');
			done();
		});

	
	});


	
	
	it("can run checkPaymentStatus action",function(){
	 
          iw.checkPaymentStatus({"orderId":args.orderId,"providerName":args.providerName,"providerType":args.providerType},function(err,result){
	              if (err)
	          	return done(err);
		   result.should.have.property("checkPaymentStatusResult");
                   result.checkPaymentStatusResult.success.should.be.a('boolean');
		   result.checkPaymentStatusResult.success.should.equal(true);
		   done();
            });
	
	});
});
