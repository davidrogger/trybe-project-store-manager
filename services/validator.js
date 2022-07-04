const Joi = require('joi');

// função apresentada durante as aulas para melhor tratamento no uso do joi.
const runSchema = (schema) => async (itemToValidate) => {
  const { error, value } = schema.validate(itemToValidate);
  if (error) throw error;
  return value;
};

const id = runSchema(Joi.object({
  id: Joi.number().required().positive().integer(),
}));

module.exports = {
  runSchema,
  id,
};