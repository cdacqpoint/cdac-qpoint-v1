const CourseTag = require("../models/courseTagModel")
const Post = require("../models/postModel")
const async = require('async');


exports.getCourseTagsFromName = async (name) => {
    return CourseTag.findOne({ name: name })
}

exports.getActiveCourseTags = async (callback) => {
    return CourseTag.find({ status: true }, callback);
}


exports.getActiveCourseTagsDetails = async (callback) => {
    CourseTag.find({ "status": true }).populate('postCount').
        exec(callback);
}
