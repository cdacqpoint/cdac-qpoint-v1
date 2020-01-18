const helper = require("../helpers")
const CommentService = require("../services/commentService")
const PostModel = require("../models/postModel");
const { body, validationResult } = require('express-validator');
const mailer = require('../helpers/mailer')


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