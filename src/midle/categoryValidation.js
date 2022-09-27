const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const categoryValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = categorySchema.validate({ name });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = categoryValidation;