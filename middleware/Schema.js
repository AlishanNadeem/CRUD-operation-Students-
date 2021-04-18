const Joi = require("joi");

const schema = {
  student: Joi.object({
    stdName: Joi.string().max(50).required(),
    stdAge: Joi.number().max(2).required(),
    stdClass: Joi.number().max(2).required(),
    stdNumber: Joi.number().required(),
    stdAddress: Joi.string().max(100).required(),
    history: Joi.array(),
  }),
};

module.exports = schema;
