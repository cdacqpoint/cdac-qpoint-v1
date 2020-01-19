const Comment = require("../models/commentModel")
const async = require("async")

module.exports = {
    createComment,
    fetchCommentsMaster,
}

/**
 * A Master Functions for fetching comments
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} { post, limit, offset }
 * @param {boolean} [active=true]
 * @param {*} [callback=null]
 * @returns
 */
async function fetchCommentsMaster({ post, limit, offset }, active = true, callback = null) {
    let conditions = { post };
    let sortBy = { upvotes: "desc", createdAt: "desc" };
    let skip = 0;
    let limitDoc = 10;
    let details = "_id post desc upvotes createdAt";

    //Get Only active comments
    if (active === true) {
        conditions = { ...conditions, status: { $nin: ["deleted"] } }
    }

    //offset
    if (typeof skip !== "undefined" && skip !== null && skip !== "") {
        skip = parseInt(offset);
    }

    //limit
    if (typeof limit !== "undefined" && limit !== null && limit !== "") {
        limitDoc = parseInt(limit);
    }

    //
    return async.parallel({
        comments_count: function (callback) {
            Comment.countDocuments(conditions, callback);
        },
        comments: function (callback) {
            Comment.find(conditions, details)
                .skip(skip).limit(limitDoc).sort(sortBy).exec(callback);
        }
    }, callback)
}

/**
 * Create Comment
 * @author Sai krishnan <xicoder96@github.com>
 * @param {*} { post, desc }
 * @returns
 */
async function createComment({ post, desc }) {
    let cat = new Comment({ post, desc });
    return await cat.save();
}