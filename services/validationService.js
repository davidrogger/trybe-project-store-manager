const Joi = require('joi');

// função apresentada durante as aulas para melhor tratamento no uso do joi.
const runSchema = (schema) => async (itemToValidate) => {
  const { error, value } = schema.validate(itemToValidate);
  if (error) throw error;
  return value;
};

const validate = {
  id: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),
  productBody: runSchema(Joi.object({
    name: Joi.string().min(5).required(),
  })),
  productSalesBody: runSchema(Joi.object({
    sales: Joi.array().items(
      Joi.object({
        productId: Joi.number().label('productId').integer().positive()
          .required(),
        quantity: Joi.number().label('quantity').min(1).required(),
      }).required(),
    ).required(),
  })),
};

module.exports = {
  validate,
};