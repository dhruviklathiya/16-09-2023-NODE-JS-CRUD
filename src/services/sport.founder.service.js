const { Sport_founder } = require("../models");

const get_sport_founder_by_name = async(sport_founder_name) => {
    return Sport_founder.findOne({sport_founder_name})
}

const create_sport_founder = async(reqbody) => {
    return Sport_founder.create(reqbody);
}

const get_sport_founder_list = async() => {
    return Sport_founder.find();
}

const get_sport_founder_by_id = async(sport_founder_id) => {
    return Sport_founder.findById(sport_founder_id);
}

const update_sport_founder = async(sport_founder_id,reqbody) => {
    return Sport_founder.findByIdAndUpdate(sport_founder_id,{$set:reqbody});
}

const delete_sport_founder = async(sport_founder_id) => {
    return Sport_founder.findByIdAndDelete(sport_founder_id);
}

module.exports = {
    get_sport_founder_by_name,
    create_sport_founder,
    get_sport_founder_list,
    get_sport_founder_by_id,
    update_sport_founder,
    delete_sport_founder
}