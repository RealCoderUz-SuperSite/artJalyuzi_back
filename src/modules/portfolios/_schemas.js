const Joi = require("joi");

exports.addPortfoliosSchema = {
  body: Joi.object({
    _id: Joi.string(),
    name_uz: Joi.string(),
    name_ru: Joi.string(),
    description_uz: Joi.string(),
    description_ru: Joi.string(),
    image: Joi.array(),
  }),
};

exports.patchPortfoliosSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    _id: Joi.string(),
    name_uz: Joi.string(),
    name_ru: Joi.string(),
    description_uz: Joi.string(),
    description_ru: Joi.string(),
    image: Joi.array(),
  }),
};

exports.allPortfoliosSchema = {
  query: Joi.object({
    q: Joi.string(),
    sort: Joi.object({
      by: Joi.string().valid("_id"),
      order: Joi.string().valid("asc", "desc"),
    }),
    page: Joi.object({
      offset: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(1).default(3),
    }),
  }),
};
