const mongoose = require("mongoose");

const blog_Schema = new mongoose.Schema(
    {
        blog_title:{
            type:String,
            trim:true
        },
        blog_desc:{
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

const blog = mongoose.model("Blog",blog_Schema);
module.exports = blog