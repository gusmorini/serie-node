const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const TaksSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    assigneTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});



const Task = mongoose.model('Task', TaksSchema);

module.exports = Task;