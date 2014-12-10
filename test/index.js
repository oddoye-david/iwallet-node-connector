var should = require('chai').should(),
    iwallet = require('../index.js'),
    uuid = require('uuid');

var ns = 'http://www.i-walletlive.com/payLIVE';
//var url = 'https://www.i-walletlive.com/paylive/paymentservice.asmx?wsdl';
var url = 'http://54.173.0.222:8081/webservices/paymentservice.asmx?wsdl';
var orderId = uuid.v1();

var orderItem;
var args = {
		"taxAmount":5,
		"total":295,
                 "orderItems":[],
		"shippingCost":10,
                "orderId": orderId,
	        "comment2": "TEST",
      	        "comment1": "TEST",
               	"subtotal":280
             };
var proxy = {
	proxy: "http://127.0.0.1:8888",
        strictSSL: false	
};

//Initialise 
var iw = new iwallet(ns,url,"1.4","iwallet@dreamoval.com","bdVI+jtRl80PG4x6NMvYOwfZTZtwfN","C2B",1,proxy);

describe('Module constructor',function(){
	it('initialises header object',function(){
		iw.soapHeader.PaymentHeader.APIVersion.should.equal('1.4');
		iw.proxy.should.equal(proxy);
	});
});


describe('Utility functions',function(){
	it('builds an order item object from the arguments passed',function(){
		orderItem = iw.buildOrderItem("conv1","Converse All-Star",140,2,280);
		orderItem.should.have.property("OrderItem");
		orderItem.OrderItem.ItemName.should.equal("Converse All-Star");	
	});
});


describe('Connector functions',function(){
//Test specific time for async adjust when necessary
		this.timeout(10000);
/*	
	it("mobilePaymentOrder",function(){
		
	 	iwl.mobilePaymentOrder();
	});
*/	

	it("processPaymentOrder",function(done){

		args.orderItems.push(orderItem);
		iw.processPaymentOrder(args,function(err,result){
			if(err)
				return done(err);
			result.should.have.property("ProcessPaymentOrderResult");
			result.should.be.a('string');
			done();
		});
			
	});

/*
	it("confirmTransaction",function(){
	
	
	});

	
	it("generatePaymentCode",function(){
	
	
	});

	
	it("verifyMobilePayment",function(){
	
	
	});

	
	it("cancelTransaction",function(){
	
	
	});

	
	it("checkPaymentStatus",function(){
	
	
	});
*/

});
