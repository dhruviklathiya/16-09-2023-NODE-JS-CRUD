const express = require("express");
const validate = require("../../middlewares/validate");
const { sport_name_Validation } = require("../../validations");
const { sport_name_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-sport_name",
    validate(sport_name_Validation.create_sport_name),
    sport_name_Controller.create_sport_name
)

router.put(
    "/update-sport_name/:sport_nameId",
    validate(sport_name_Validation.create_sport_name),
    sport_name_Controller.update_sport_name
)

router.delete(
    "/delete-sport_name/:sport_nameId",
    sport_name_Controller.delete_sport_name
)

router.get(
    "/list",
    sport_name_Controller.get_sport_name_list
)



module.exports = router;