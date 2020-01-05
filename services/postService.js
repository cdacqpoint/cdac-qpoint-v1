const Post = require("../models/postModel")

const categoryService = require("./categoryService")
const CourseTagService = require("./courseTagService")

/**
 * Create Post
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} details
 * @returns
 */
exports.createPost = async (details) => {
    let CourseTag = await CourseTagService.getCourseTagsFromName(details.courseTag)
    let categoriesId = await categoryService.getAllOrCreate(details.categories);
    const postData = {
        title: details.title,
        desc: details.desc,
        courseTag: CourseTag._id,
        categories: categoriesId,
        notify: details.notify
    };
    if (details.notify) {
        postData.name = details.name;
        postData.email = details.email;
    }
    const post = new Post(postData)
    await post.save();
    return post;
}


/**
 * Check if title is unique...
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {string} title
 * @returns
 */
exports.isTitleUnique = async (title) => {
    return await Post.findOne({ title: title }).then(post => {
        if (post) {
            return Promise.reject('Duplicate Question');
        }
    });
}