const mongoose = require('mongoose');
const validator = require('validator')
const moment = require('moment'); // For date handling.
const Category = require('./categoryModel')
const CourseTag = require('./courseTagModel')
const Schema = mongoose.Schema;

//Post Table schema
const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 100
    },
    desc: {
        type: String,
        required: true,
        min: 3,
        max: 800
    },
    courseTag: {
        type: Schema.ObjectId,
        ref: 'CourseTag',
        index: true,
        required: true
    },
    categories: [
        {
            type: Schema.ObjectId,
            ref: 'Category',
            index: true,
            required: true
        }
    ],
    status: {
        type: String,
        enum: ['published', 'draft', 'deleted', 'scheduled'],
        default: 'published'
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public'
    },
    scheduledTo: {
        type: Date,
        default: Date.now()
    },
    publishedOn: {
        type: Date,
        default: Date.now()
    },
    attachments: [
        {
            file: {
                type: String
            },
            extension: {
                type: String,
                default: "png"
            },
            size: {
                type: Number
            },
            size: {
                type: Number
            },
        }
    ],
    upvotes: {
        type: Number,
        default: 0
    },
    notify: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    comments: [
        {
            type: Schema.ObjectId,
            ref: 'Comment'
        }
    ],
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'modifiedAt' } })

// Virtual for this post instance URL.
postSchema.virtual('fetchUrl').get(function () {
    return '/post/' + this._id;
});
postSchema.virtual('courseTagUrl').get(function () {
    return '/post/' + this._id;
});
postSchema.virtual('voteUrl').get(function () {
    return `/vote/${this._id}/post`;
});

//After insertion middlewares
postSchema.post('save', async function (doc) {
    await CourseTag.findByIdAndUpdate(doc.courseTag,
        { $push: { posts: doc } },
        { safe: true, upsert: true });
    await doc.categories.map(async (category) => {
        await Category.findByIdAndUpdate(category,
            { $push: { posts: doc } },
            { safe: true, upsert: true });
    })
});


//Formatted Dates
postSchema.virtual('scheduledToFormated').get(function () {
    return moment(this.scheduledTo).format('MMMM Do YYYY');
});
postSchema.virtual('publishedOnFormated').get(function () {
    return moment(this.publishedOn).format('MMMM Do YYYY');
});
postSchema.virtual('createdAtFormated').get(function () {
    return moment(this.createdAt).format('MMMM Do YYYY');
});
postSchema.virtual('modifiedAtFormated').get(function () {
    return moment(this.modifiedAt).format('MMMM Do YYYY');
})

//Formatted Dates in Relative Time
postSchema.virtual('scheduledToTimesAgo').get(function () {
    return moment(this.scheduledTo).endOf('hour').fromNow();
});
postSchema.virtual('publishedOnTimesAgo').get(function () {
    return moment(this.publishedOn).startOf('hour').fromNow();
});
postSchema.virtual('createdTimesAgo').get(function () {
    return moment(this.createdAt).startOf('hour').fromNow();
});
postSchema.virtual('modifiedTimesAgo').get(function () {
    return moment(this.modifiedAt).startOf('hour').fromNow();
})


// Export model.
module.exports = mongoose.model('Post', postSchema);