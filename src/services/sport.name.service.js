const { Sport_name } = require("../models");

const get_sport_name_by_name = async(sport_name_name) => {
    return Sport_name.findOne({sport_name_name})
}

const create_sport_name = async(reqbody) => {
    return Sport_name.create(reqbody);
}

const get_sport_name_list = async() => {
    return Sport_name.find();
}

const get_sport_name_by_id = async(sport_name_id) => {
    return Sport_name.findById(sport_name_id);
}

const update_sport_name = async(sport_name_id,reqbody) => {
    return Sport_name.findByIdAndUpdate(sport_name_id,{$set:reqbody});
}

const delete_sport_name = async(sport_name_id) => {
    return Sport_name.findByIdAndDelete(sport_name_id);
}

module.exports = {
    get_sport_name_by_name,
    create_sport_name,
    get_sport_name_list,
    get_sport_name_by_id,
    update_sport_name,
    delete_sport_name
}