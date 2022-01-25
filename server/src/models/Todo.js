const { Schema, model } = require('mongoose');

const Todo = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  isDone: {type: Boolean, required: true}
});

module.exports = model('Todo', Todo);
