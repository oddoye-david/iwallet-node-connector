import Slydepay from '../lib/slydepay';
import createInvoiceFactory from '../lib/methods/createInvoice';

let createInvoice;

beforeEach(() => {
  const instance = Slydepay.init({
    emailOrMobileNumber: 'merchant@awesomecustomer.com',
    merchantKey: 'thatkeyyoushouldkeepsecret',
  });
  createInvoice = createInvoiceFactory(instance);
});

describe('Slydepay.createInvoice Tests', () => {
  test('Should throw if invoice data is invalid', () => {
    const invalidInvoiceData = {
      foo: 'bar',
      fizz: 'buzz',
    };

    expect(() => {
      createInvoice(invalidInvoiceData);
    }).toThrowError();
  });

  test('Should not throw if invoice data is valid', () => {
    const validInvoiceData = {
      emailOrMobileNumber: 'merchant@awesomecustomer.com',
      merchantKey: 'thatkeyyoushouldkeepsecret',
      amount: 123.4,
      orderCode: 'my-uniquely-generated-order-id',
    };

    expect(() => {
      createInvoice(validInvoiceData);
    }).not.toThrowError();
  });
});
