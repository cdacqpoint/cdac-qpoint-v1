var mongoose = require('mongoose');
var Post = require('./postModel')
var Schema = mongoose.Schema;

//Course Tags Table schema
const CommentSchema = new Schema({
    post: {
        type: Schema.ObjectId,
        ref: 'Post',
        index: true,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['published', 'modified', 'deleted'],
        default: 'published'
    },
    upvotes: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        trim: true
    },
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'modifiedAt' }})

CommentSchema.virtual('createdTimesAgo').get(function () {
    return moment(this.createdAt).startOf('hour').fromNow();
});
CommentSchema.virtual('modifiedTimesAgo').get(function () {
    return moment(this.modifiedAt).startOf('hour').fromNow();
})

//After Saving comment
CommentSchema.post('save', async function(doc) {
    await Post.findByIdAndUpdate(doc.post,
        { $push: { comments: doc } },
        { safe: true, upsert: true });
  });

// Export model.
module.exports = mongoose.model('Comment', CommentSchema);