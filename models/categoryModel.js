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
    }
}, { timestamps: { createdAt: 'created_at' } })

// Export model.
module.exports = mongoose.model('Category', CategorySchema);