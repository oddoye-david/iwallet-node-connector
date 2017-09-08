import Joi from 'joi';

const instanceOptionsSchema = Joi.object().keys({
  emailOrMobileNumber: Joi.alternatives().try(
    Joi.string().regex(/^\d{12}$/, 'mobile number'),
    Joi.string().email(),
  ).required(),
  merchantKey: Joi.string().required(),
  amount: Joi.number().precision(2).required(),
  orderCode: Joi.string().required(),
  descritpion: Joi.string(),
  orderItems: Joi.array().items(Joi.object().keys({
    itemCode: Joi.string().required(),
    itemName: Joi.string().required(),
    unitPrice: Joi.number().required(),
    quantity: Joi.number().required(),
    subTotal: Joi.number().precision(2).required(),
  })),
});

export default instanceOptionsSchema;
