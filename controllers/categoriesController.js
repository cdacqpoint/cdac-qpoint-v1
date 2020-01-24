const categoryService = require("../services/categoryService")
const postService = require("../services/postService")
const helper = require("../helpers")
const { body, validationResult, sanitizeBody } = require('express-validator');
const mailer = require('../helpers/mailer');
const async = require("async")


exports.fetch_categories_get = (req, res, next) => {
     categoryService.categoryFetch(req.query).then((result)=>{
        //send back response
        res.status(200).send(helper.formatResponse(true, "Category details fetched successfully!", result));
    }).catch((err) => {
        // There are errors. 
        res.status(400).send(helper.formatResponse(false, "Unable to fetch details!", err))
        return next(err);
    });
}

// Handle Catgeory create on POST.
exports.post_create_category = [
    // Validate fields.
    body('name').isLength({ min: 2 }).trim().withMessage('Please enter name.')
        .custom(categoryService.isNameUnique).withMessage('Duplicate Question!'),
    body('desc').isLength({ min: 3, max: 700 }).trim().withMessage('Please enter Description about your question.'),

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
            console.log("req body", req.body)
            // file upload will be here
            categoryService.createCategory(req.body).then((category) => {
                // intimation mailing will be here
                console.log(process.env.SEND_MAIL, category.notify)
                if (category.notify && process.env.SEND_MAIL) {
                    console.log("Hello im here", category)
                    mailer.init(category.email, "Thank you for reaching out!").sendReachingOutMessage(category.name, category.desc).catch(console.log);
                }
                // Successful - send back response that new record created.
                res.status(200).send(helper.formatResponse(true, "Posted Successfully!", category));
            }).catch(next)
        }
    }

];