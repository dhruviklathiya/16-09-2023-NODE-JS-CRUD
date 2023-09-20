const { Crypto_name } = require("../models");

const get_crypto_name_by_name = async(crypto_name_name) => {
    return Crypto_name.findOne({crypto_name_name})
}

const create_crypto_name = async(reqbody) => {
    return Crypto_name.create(reqbody);
}

const get_crypto_name_list = async() => {
    return Crypto_name.find();
}

const get_crypto_name_by_id = async(crypto_name_id) => {
    return Crypto_name.findById(crypto_name_id);
}

const update_crypto_name = async(crypto_name_id,reqbody) => {
    return Crypto_name.findByIdAndUpdate(crypto_name_id,{$set:reqbody});
}

const delete_crypto_name = async(crypto_name_id) => {
    return Crypto_name.findByIdAndDelete(crypto_name_id);
}

module.exports = {
    get_crypto_name_by_name,
    create_crypto_name,
    get_crypto_name_list,
    get_crypto_name_by_id,
    update_crypto_name,
    delete_crypto_name
}