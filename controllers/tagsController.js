const courseTagService = require("../services/courseTagService")
const postService = require("../services/postService")
const helper = require("../helpers")


// Display detail page for a specific Genre.
exports.tag_details_get = function (req, res, next) {

    courseTagService.getActiveCourseTags(async function (err, results) {
        if (err) { return next(err); }
        if (results == null) { // No results.
            var err = new Error('No tags found!');
            err.status = 404;
            return next(err);
        }
        var data = [];
        var doc = {};
        for (var i = 0; i < results.length; i++) {
            doc = results[i]._doc;
            doc['totalCount'] = await postService.getPostCountByCourseTag(doc._id);
            doc['weekCount'] = await postService.getPostCountInWeekByCourseTag(doc._id);
            doc['todaysCount'] = await postService.getPostCountTodayByCourseTag(doc._id);
            data.push(doc)
        }
        res.status(200).send(helper.formatResponse(true, "Fetched Tags Successfully!", data));
    })
}
