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
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
})

// Export model.
module.exports = mongoose.model('CourseTag', CourseTagSchema);