const mongoose = require("mongoose");

const crypto_newsletter_Schema = new mongoose.Schema(
    {
        crypto_newsletter_name:{
            type:String,
            trim:true
        },
        crypto_newsletter_desc:{
            type:String,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const crypto_newsletter = mongoose.model("Crypto_newsletter",crypto_newsletter_Schema);
module.exports = crypto_newsletter