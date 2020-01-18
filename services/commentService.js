const Comment = require("../models/commentModel")

module.exports = {
    createComment,
}

async function createComment({  post, desc }) {
    let cat = new Comment({ post, desc });
    return await cat.save();
}