'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instanceOptionsSchema = _joi2.default.object().keys({
  emailOrMobileNumber: _joi2.default.alternatives().try(_joi2.default.string().regex(/^\d{12}$/, 'mobile number'), _joi2.default.string().email()).required(),
  merchantKey: _joi2.default.string().required()
});

exports.default = instanceOptionsSchema;