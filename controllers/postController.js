const PostService = require("../services/postService")
const helper = require("../helpers")
const { body, validationResult,sanitizeBody } = require('express-validator');

// Handle Post create on POST.
exports.post_create_post = [
    // Validate fields.
    body('title').isLength({ min: 3 }).trim().withMessage('Please enter title.')
        .custom(PostService.isTitleUnique).withMessage('Duplicate Question!'),
    body('desc').isLength({ min: 3, max: 700 }).trim().withMessage('Please enter Description about your question.'),
    body('courseTag').trim(),
    body('categories').isArray().withMessage('Course Categories must be selected.'),
    body('notify').isBoolean().trim().optional({ checkFalsy: true }),
    body('name').isLength({ min: 3, max: 100 }).trim().optional({ checkFalsy: true }),
    body('email').normalizeEmail().isEmail().trim().optional({ checkFalsy: true }),

    // Sanitize fields.
    //sanitizeBody('*').escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.status(400).send(helper.formatResponse(false, "Please check the value submitted!", errors));
            return;
        } else {
            console.log("req body",req.body)
            // file upload will be here
            PostService.createPost(req.body).then((post) => {
                // intimation mailing will be here
                // Successful - send back response that new record created.
                res.status(200).send(helper.formatResponse(true, "Posted Successfully!", post));
            }).catch(next)
        }
    }

];
