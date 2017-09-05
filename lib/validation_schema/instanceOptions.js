import Joi from 'joi';

const instanceOptionsSchema = Joi.object().keys({
  emailOrMobileNumber: Joi.alternatives().try(
    Joi.string().regex(/^\d{12}$/, 'mobile number'),
    Joi.string().email(),
  ).required(),
  merchantKey: Joi.string().required(),
});

export default instanceOptionsSchema;
