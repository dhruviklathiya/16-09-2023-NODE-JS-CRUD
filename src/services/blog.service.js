const { Blog } = require("../models");

const get_blog_by_title = async(blog_title) => {
    return Blog.findOne({blog_title})
}

const create_blog = async(reqbody) => {
    return Blog.create(reqbody);
}

const get_blog_list = async() => {
    return Blog.find();
}

const get_blog_by_id = async(blog_id) => {
    return Blog.findById(blog_id);
}

const update_blog = async(blog_id,reqbody) => {
    return Blog.findByIdAndUpdate(blog_id,{$set:reqbody});
}

const delete_blog = async(blog_id) => {
    return Blog.findByIdAndDelete(blog_id);
}

module.exports = {
    get_blog_by_title,
    create_blog,
    get_blog_list,
    get_blog_by_id,
    update_blog,
    delete_blog
}