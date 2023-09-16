const Joi = require("joi");

/** create tag */
const create_tag = {
  body: Joi.object().keys({
    tag_name: Joi.string().required().trim(),
    tag_desc: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_tag
}