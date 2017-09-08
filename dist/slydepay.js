'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _instanceOptions = require('./validation_schema/instanceOptions');

var _instanceOptions2 = _interopRequireDefault(_instanceOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slydepay = {
  init: function init(options) {
    var _Joi$validate = _joi2.default.validate(options, _instanceOptions2.default),
        ValidationError = _Joi$validate.error;

    if (ValidationError) {
      throw Error(ValidationError);
    }

    var request = _axios2.default.create({
      baseURL: 'https://app.slydepay.com.gh/api/merchant/',
      headers: { 'Content-Type': 'application/json' }
    });

    return {
      /**
       * Retrieves a list of all possible payment options on Slydepay
       *
       * @returns {array}
       */
      listPayOptions: async function listPayOptions() {
        try {
          var _ref = await request.post('invoice/payoptions', {
            emailOrMobileNumber: options.emailOrMobileNumber,
            merchantKey: options.merchantKey
          }),
              data = _ref.data;

          console.log(data);
          return data;
        } catch (listPayOptionsError) {
          throw Error(listPayOptionsError);
        }
      },
      createInvoice: function createInvoice() {},
      createAndSendInvoice: function createAndSendInvoice() {},
      sendInvoice: function sendInvoice() {},
      checkPaymentStatus: function checkPaymentStatus() {},
      confirmTransaction: function confirmTransaction() {},
      cancelTransaction: function cancelTransaction() {}
    };
  }
};

exports.default = Slydepay;