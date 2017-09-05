import Joi from 'joi';

import instanceOptionsSchema from './validation_schema/instanceOptions';

const Slydepay = {
  init(options) {
    const { error } = Joi.validate(options, instanceOptionsSchema);
    if (error) {
      throw Error(error);
    }

    return {
      /**
       * Retrieves a list of all possible payment options on Slydepay
       *
       * @returns {array}
       */
      listPayOptions() { },
      createInvoice() { },
      createAndSendInvoice() { },
      sendInvoice() { },
      checkPaymentStatus() { },
      confirmTransaction() { },
      cancelTransaction() { },
    };
  },
};

export default Slydepay;
