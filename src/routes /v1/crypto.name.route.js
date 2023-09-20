const express = require("express");
const validate = require("../../middlewares/validate");
const { crypto_name_Validation } = require("../../validations");
const { crypto_name_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-crypto_name",
    validate(crypto_name_Validation.create_crypto),
    crypto_name_Controller.create_crypto_name
)

router.put(
    "/update-crypto_name/:crypto_nameId",
    validate(crypto_name_Validation.create_crypto),
    crypto_name_Controller.update_crypto_name
)

router.delete(
    "/delete-crypto_name/:crypto_nameId",
    crypto_name_Controller.delete_crypto_name
)

router.get(
    "/list",
    crypto_name_Controller.get_crypto_name_list
)



module.exports = router;