const Post = require("../models/postModel")

const moment = require('moment');
const async = require("async")
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

/**
 * Get Post Grouped By Course Tags...
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} courseTag
 * @returns
 */
exports.getPostCountByCourseTag = async (courseTag) => {
    return await Post.countDocuments({ courseTag: courseTag });
}

/**
 * Get Post Counts in this week By Course Tags...
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} courseTag
 * @returns
 */
exports.getPostCountInWeekByCourseTag = async (courseTag) => {
    return await Post.countDocuments({
        courseTag: courseTag, createdAt: {
            $gte: moment().week(-1).toString()
        }
    });
}

/**
 * Get Post Counts today By Course Tags...
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} courseTag
 * @returns
 */
exports.getPostCountTodayByCourseTag = async (courseTag) => {
    return await Post.countDocuments({
        courseTag: courseTag, createdAt: {
            $gte: moment().day(-1).toString()
        }
    });
}

/**
 * Master function for all fetch operations on Post.
 * @author Sai Krishnan S <xicoder96@github.com>
 * @param {*} data
 * @param {boolean} active
 * @param {callback} callback
 * @returns Promise
 */
exports.postFetchMaster = async ({ limit, offset, relatedQuesId, courseTag, category, titleOnly, sort }, active = true, callback = null) => {
    let conditions = {};
    let sortBy = {};
    let skip = 0;
    let limitDoc = 10;

    //Get Only active posts
    if (active === true) {
        conditions = { ...conditions, status: { $nin: ["deleted", "scheduled"] } }
    }

    //offset
    if (typeof skip !== "undefined" && skip !== null && skip !== "") {
        skip = parseInt(offset);
    }

    //offset
    if (typeof limit !== "undefined" && limit !== null && limit !== "") {
        limitDoc = parseInt(limit);
    }

    //sorting algorithm
    if (typeof sort !== "undefined" && sort !== null && sort !== "") {
        switch (sort) {
            case "latest":
                sortBy = { ...sortBy, publishedOn: 'desc' }
                break;
            case "top_rated":
                sortBy = { ...sortBy, upvotes: 'desc' }
                break;
            default:
                sortBy = { ...sortBy, publishedOn: 'desc' }
                break;
        }
    }

    if (typeof relatedQuesId !== "undefined" && relatedQuesId !== null && relatedQuesId !== "") {
        //Show only relatedQuestion
        //get Course tag and category of the related post 
        const relatedQuestion = await Post.findById(relatedQuesId, 'courseTag categories');
        conditions = { ...conditions, courseTag: relatedQuestion.courseTag, categories: { $in: relatedQuestion.categories }, _id: { $ne: relatedQuesId } }

    } else {
        //Filter by category and course tags
        if (typeof courseTag !== "undefined" && courseTag !== null && courseTag !== "") {
            conditions = { ...conditions, courseTag }
        }
        //category
        if (typeof category !== "undefined" && category !== null && category !== "") {
            conditions = { ...conditions, categories: category }
        }
    }

    //Return back a promise
    return async.parallel({
        posts_count: function (callback) {
            Post.countDocuments(conditions, callback);
        },
        posts: function (callback) {
            //Fetch Details
            if (typeof titleOnly !== "undefined" && titleOnly.trim() === "true") {
                //With Minimum Fetch Details
                let details = "_id title upvotes";
                Post.find(conditions, details).skip(skip).limit(limitDoc).sort(sortBy).exec(callback);
            } else {
                //With all details
                let details = "_id title comments desc categories courseTag upvotes publishedOn modifiedAt name email";
                Post.find(conditions, details)
                    .populate({
                        path: 'categories',
                        match: { status: true },
                        select: '_id name'
                    }).populate({
                        path: 'courseTag',
                        match: { status: true },
                        select: '_id name'
                    }).skip(skip).limit(limitDoc).sort(sortBy).exec(callback);
            }
        },
    }, callback);
}