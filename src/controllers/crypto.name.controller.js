const { crypto_name_Service } = require("../services");

const create_crypto_name = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_name_exist = await crypto_name_Service.get_crypto_name_by_name(reqbody.crypto_name_name);
        if(crypto_name_exist){
            throw new Error("Crypto on this name already exist -!- ");
        }
        const crypto_name = await crypto_name_Service.create_crypto_name(reqbody);
        if(!crypto_name){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto created successfully ^-^ ",
            data:crypto_name
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_crypto_name = async(req,res) => {
    try {
        const crypto_name_id = req.params.crypto_nameId;
        const reqbody = req.body;
        const crypto_name_exist = await crypto_name_Service.get_crypto_name_by_id(crypto_name_id);
        if(!crypto_name_exist){
            throw new Error("Crypto does not exist -!- ");
        }
        const crypto_name_update = await crypto_name_Service.update_crypto_name(crypto_name_id,reqbody);
        if(!crypto_name_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_crypto_name = async(req,res) => {
    try {
        const crypto_name_id = req.params.crypto_nameId;
        const crypto_name_exist = await crypto_name_Service.get_crypto_name_by_id(crypto_name_id);
        if(!crypto_name_exist){
            throw new Error("Crypto does not exist -!- ");
        }
        const crypto_name_delete = await crypto_name_Service.delete_crypto_name(crypto_name_id);
        if(!crypto_name_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_crypto_name_list = async(req,res) => {
    try {
        const crypto_name_list = await crypto_name_Service.get_crypto_name_list();
        if(!crypto_name_list){
          throw new Error("Crypto list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto_name list dispatch successfully ^-^ ",
          data: crypto_name_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_name,
    get_crypto_name_list,
    update_crypto_name,
    delete_crypto_name
}