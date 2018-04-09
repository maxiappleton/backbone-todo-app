var mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  title: {
    type: String
  },
  dueDay: {
    type: String
  },
  dueMonth: {
    type: String
  },
  dueYear: {
    type: String
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean
  },
  formattedDate: {
    type: String,
    default: 'No Due Date'
  }
});

module.exports = { Todo };