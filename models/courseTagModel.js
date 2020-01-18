var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * @author Sai krishnan S
 */
//Course Tags Table schema
const CourseTagSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    posts: [{
        type: Schema.ObjectId,
        ref: 'Post',
        index: true
    }]
})
CourseTagSchema.virtual('postCount', {
    ref: 'Post', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'courseTag', // is equal to `foreignField`
    count: true // And only get the number of docs
});
// Export model.
module.exports = mongoose.model('CourseTag', CourseTagSchema);