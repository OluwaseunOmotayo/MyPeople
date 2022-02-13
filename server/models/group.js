const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const groupSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    group: {
        type: Object,
        required: true
    },
    sender: {
        type: Object,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Group", groupSchema);