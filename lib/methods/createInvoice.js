import Joi from 'joi';

import invoiceSchema from '../validation_schema/invoice';

const createInvoice = (axios, defaultOptions) => (invoiceData) => {
  const { error: ValidationError } = Joi.validate(invoiceData, invoiceSchema);
  if (ValidationError) {
    throw Error(ValidationError);
  }
};

export default createInvoice;
