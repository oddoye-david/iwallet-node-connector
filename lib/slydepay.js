import Joi from 'joi';
import axios from 'axios';

import instanceOptionsSchema from './validation_schema/instanceOptions';

/**
 * Methods
 */
import listPayOptionsFactory from './methods/listPayOtions';
import createInvoiceFactory from './methods/createInvoice';

const Slydepay = {
  init(options) {
    const { error: ValidationError } = Joi.validate(options, instanceOptionsSchema);
    if (ValidationError) {
      throw Error(ValidationError);
    }

    const request = axios.create({
      baseURL: 'https://app.slydepay.com.gh/api/merchant/',
      headers: { 'Content-Type': 'application/json' },
    });

    return {
      listPayOtions: listPayOptionsFactory(request, options),
      createInvoice: createInvoiceFactory(request, options),
      createAndSendInvoice() { },
      sendInvoice() { },
      checkPaymentStatus() { },
      confirmTransaction() { },
      cancelTransaction() { },
    };
  },
};

export default Slydepay;
