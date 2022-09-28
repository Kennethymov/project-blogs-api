const Joi = require('joi');

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const blogPostValidation = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = blogPostSchema.validate({ title, content, categoryIds });
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = blogPostValidation;