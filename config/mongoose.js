// getting all the modules of monggose
const mongoose = require('mongoose');

// connecting mongoose to ouir db named todo_list_db
mongoose.connect('mongodb://localhost/todo_list_db');

// making connection
const db = mongoose.connection;

// disply error function
db.on('error', console.error.bind(console, 'error connecting tio db'));


// starting connection with the db
db.once('open', function () {
    console.log("successfully connected to todo_lst_db");
})