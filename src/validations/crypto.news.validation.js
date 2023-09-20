const Joi = require("joi");

/** create crypto_news */
const create_crypto_news = {
  body: Joi.object().keys({
    crypto_news_name: Joi.string().required().trim(),
    crypto_news_desc: Joi.string().required().trim(),
    crypto: Joi.string().required().trim(),
  }),
};

module.exports = {
    create_crypto_news
}