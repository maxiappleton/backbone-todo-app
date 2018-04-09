const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json());

// API
const { mongoose } = require('./mongoose');
const { Todo } = require('./todo');

// GET all todos
app.get('/todos', (req, res) => {
  Todo.find().then(allTodos => { res.json(allTodos) });
});

// POST one todo
app.post('/todos', (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save().then(todo => { res.json(todo) });
});

// PUT one todo
app.put('/todos/:todoID', (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.todoID }, req.body, { new: true }).then(todo => { res.json(todo) });
});

// DELETE one todo
app.delete('/todos/:todoID', (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.todoID }).then(todo => res.json(todo));
});






app.listen(process.env.PORT || 3000);