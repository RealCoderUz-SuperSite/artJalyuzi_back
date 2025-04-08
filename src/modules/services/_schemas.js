const Joi = require("joi");

exports.addBannersSchema = {
  body: Joi.object({
    name_uz: Joi.string(),
    name_ru: Joi.string(),
    description_uz: Joi.string(),
    description_ru: Joi.string(),
    link: Joi.string(),
  }),
};

exports.patchBannersSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name_uz: Joi.string(),
    name_ru: Joi.string(),
    description_uz: Joi.string(),
    description_ru: Joi.string(),
    link: Joi.string(),
  }),
};

exports.allBannersSchema = {
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
