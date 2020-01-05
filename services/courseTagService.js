const CourseTag = require("../models/courseTagModel")


exports.getCourseTagsFromName = async (name) => {
    return CourseTag.findOne({name : name})
}