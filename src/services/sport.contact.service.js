const { Sport_contact } = require("../models");

const get_sport_contact_by_name = async(sport_contact_name) => {
    return Sport_contact.findOne({sport_contact_name})
}

const create_sport_contact = async(reqbody) => {
    return Sport_contact.create(reqbody);
}

const get_sport_contact_list = async() => {
    return Sport_contact.find();
}

const get_sport_contact_by_id = async(sport_contact_id) => {
    return Sport_contact.findById(sport_contact_id);
}

const update_sport_contact = async(sport_contact_id,reqbody) => {
    return Sport_contact.findByIdAndUpdate(sport_contact_id,{$set:reqbody});
}

const delete_sport_contact = async(sport_contact_id) => {
    return Sport_contact.findByIdAndDelete(sport_contact_id);
}

module.exports = {
    get_sport_contact_by_name,
    create_sport_contact,
    get_sport_contact_list,
    get_sport_contact_by_id,
    update_sport_contact,
    delete_sport_contact
}