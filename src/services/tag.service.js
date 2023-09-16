const { Tag } = require("../models");

const get_tag_by_name = async(tag_name) => {
    return Tag.findOne({tag_name})
}

const create_tag = async(reqbody) => {
    return Tag.create(reqbody);
}

const get_tag_list = async(reqbody) => {
    return Tag.find();
}

const get_tag_by_id = async(tag_id) => {
    return Tag.findById(tag_id);
}

const update_tag = async(tag_id,reqbody) => {
    return Tag.findByIdAndUpdate(tag_id,{$set:reqbody});
}

const delete_tag = async(tag_id) => {
    return Tag.findByIdAndDelete(tag_id);
}

module.exports = {
    get_tag_by_name,
    create_tag,
    get_tag_list,
    get_tag_by_id,
    update_tag,
    delete_tag
}