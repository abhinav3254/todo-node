const mongoose = require('mongoose');

// Define the schema for a todo item
const todoSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the todo item
    description: { type: String }, // Description of the todo item
    dueDate: { type: Date }, // Due date of the todo item
    priority: { type: String, enum: ['low', 'medium', 'high'] }, // Priority level of the todo item
    completed: { type: Boolean, default: false }, // Completion status of the todo item
    created_at: { type: Date, default: Date.now } // Creation timestamp of the todo item
});

// Create a model using the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
