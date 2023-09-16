const Joi = require("joi");

/** create blog */
const create_blog = {
  body: Joi.object().keys({
    blog_title: Joi.string().required().trim(),
    blog_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_blog
}