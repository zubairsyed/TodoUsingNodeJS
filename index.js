// getting all modules of expreess
const express = require('express');
// getting all modules of path
const path = require('path');
// setting the port number
const port = 1000;

// code to connect mongoose file
const db = require('./config/mongoose');

// here connecting the to todos files i.e js
const Todo = require('./models/todos');

// all functions of express are added to app
const app = express();

// adding keyvalue pair to expree ejs
app.set('view engine', 'ejs');

// to set the path of view folder
app.set('views', path.join(__dirname, 'views'));

// adding middle ware/parser code
app.use(express.urlencoded());

// adding files using middle ware/body parser
app.use(express.static('assests'));

// array of tasks
var todosList = [
    {
        name:'syed',
        category: 'professional',
        date:'21/31/2020'
    }
]

// main function to get content from home.ejs file and sent back to browser/client
app.get('/', function (req, res) {

    Todo.find({}, function (err, Todos) {
        if (err) {
            console.log('Error in fetch contact!');
            return;
        }

        return res.render('home', {
            title: "My Todo List",
            todos_List: Todos
        });
    });
    
});

// create a task
app.post('/createtask', function (req, res) {
    console.log(req.body);
    // todosList.push(req.body);
    Todo.create({
        name: req.body.name,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTodo) {
        if (err) {
            console.log('error in creataing a contact');
            return;
        }
        console.log('**********', newTodo);
    })
    return res.redirect('/');
});

// delete a task
app.get('/delete-todo', function (req, res) {
    let id = req.query.id;
    Todo.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('error');
            return;
        }
        return res.redirect('/');
    })
})



// firing up the function using port at client side
app.listen(port, function (e) {
    if (e) {
        console.log('error ', e);
    }
    console.log('Expres is working fine');
});