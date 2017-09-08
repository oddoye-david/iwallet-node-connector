import Slydepay from '../lib/slydepay';

describe('Instantiation Tests', async () => {
  test('Should initialize a SlydePay instance given emailOrMobileNumber and merchantKey', () => {
    const instance = Slydepay.init({
      emailOrMobileNumber: 'merchant@awesomecustomer.com',
      merchantKey: 'thatkeyyoushouldkeepsecret',
    });

    expect(instance).toBeTruthy();
  });

  test('Should not initialize a SlydePay instance if emailOrMobileNumber or merchantKey is not provided', () => {
    expect(() => {
      Slydepay.init({
        merchantKey: 'thatkeyyoushouldkeepsecret',
      });
    }).toThrowError();
  });

  test('Should not initialize a SlydePay instance if emailOrMobileNumber is not an email or number', () => {
    expect(() => {
      Slydepay.init({
        emailOrMobileNumber: 'foo',
        merchantKey: 'thatkeyyoushouldkeepsecret',
      });
    }).toThrowError();
  });

  test('Should not initialize a SlydePay instance if merchantKey is not a string', () => {
    expect(() => {
      Slydepay.init({
        emailOrMobileNumber: 'merchant@awesomecustomer.com',
        merchantKey: 1234,
      });
    }).toThrowError();
  });
});
