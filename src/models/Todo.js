const mongoose =  require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: String,
    text: String,
    priority: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Todo",todoSchema);