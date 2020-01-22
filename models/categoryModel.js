var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Course Tags Table schema
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    posts:[{
        type: Schema.ObjectId,
        ref: 'Post',
        index: true
    }]
}, { timestamps: { createdAt: 'created_at' } })
CategorySchema.virtual('postCount', {
    ref: 'Post', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'categories', // is equal to `foreignField`
    count: true // And only get the number of docs
});
// Export model.
module.exports = mongoose.model('Category', CategorySchema);