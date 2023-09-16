const mongoose = require("mongoose");

const tag_Schema = new mongoose.Schema(
    {
        tag_name:{
            type:String,
            trim:true
        },
        tag_desc:{
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

const tag = mongoose.model("Tag",tag_Schema);
module.exports = tag