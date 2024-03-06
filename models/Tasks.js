const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"],
        maxLength: [20, "Name cannot be more than 20 characters"]
    },
    isCompleted: Boolean
}, { collection: 'tasks' });

module.exports = mongoose.model("Task", TaskSchema);
