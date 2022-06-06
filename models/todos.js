const  mongoose = require('mongoose');
// creating schema
const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todos', todoSchema);

// exporting todo
module.exports = Todo;