const helper = require("../helpers")
const CommentService = require("../services/commentService")
const PostModel = require("../models/postModel");
const { body, validationResult } = require('express-validator');
const mailer = require('../helpers/mailer')

// Handle Upvotes of post on GET.
exports.upvote_comment_get = (req, res, next) => {
    CommentService.incrementUpvotes(req.params.id).then(result => {
        if (result === null) {
            res.status(404).send(helper.formatResponse(false, "Comment not found!", null))
            return;
        }
        //send back response
        res.status(200).send(helper.formatResponse(true, "Your Response is marked!", null));
    }).catch((err) => {
        // There are errors. 
        res.status(400).send(helper.formatResponse(false, "Failed to mark response!", err))
        return next(err);
    });
}

// Handle Fetching of posts on GET.
exports.fetch_comments_get = (req, res, next) => {
    //Only if post variable is present all this makes sense...
    if (typeof req.query.post !== "undefined" && req.query.post !== null && req.query.post !== "") {
        CommentService.fetchCommentsMaster(req.query).then(result => {
            //Everything went smooth :)
            res.status(200).send(helper.formatResponse(true, "Fetched All comments!", result));
        }).catch(error => {
            // There are errors
            res.status(500).send(helper.formatResponse(false, "Oops something went wrong!!", error));
        })
    } else {
        // There are errors
        res.status(400).send(helper.formatResponse(false, "Post parameter is missing!", null));
    }
}

// Handle Comment create on POST.
exports.comment_create_post = [
    body('post', 'Post is missing.').trim(),
    body('desc').isLength({ min: 3, max: 700 }).trim().withMessage('Please enter your answer.'),

    // Process request after validation and sanitization.
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors
            res.status(400).send(helper.formatResponse(false, "Please check the value submitted!", errors));
            return next(errors);
        } else {
            CommentService.createComment(req.body).then(async (comment) => {
                //Send user mail
                const parentPost = await PostModel.findOne({ _id: comment.post })
                console.log(parentPost.notify)
                if (parentPost.notify === true && process.env.SEND_MAIL) {
                    const title = parentPost.title;
                    mailer.init(parentPost.email, `New reply on "${title}"`).sendNewCommentMessage(parentPost.name, comment.desc, parentPost._id, title).catch(console.log);
                }
                // Successful - send back response that new record created.
                res.status(200).send(helper.formatResponse(true, "Commented Successfully!", comment));
            }).catch((errors) => {
                res.status(500).send(helper.formatResponse(false, "Oops something went wrong!", errors));
            })
        }
    }
]