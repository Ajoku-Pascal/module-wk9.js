// controllers/todoController.js
const todos = [
  { id: 1, task: 'Buy foodstuff' },
  { id: 2, task: 'Do backend project' },
  { id: 3, task: 'Call mother-inlaw' }
];

exports.deleteTodo = (req, res) => 
    {
  const id = parseInt(req.params.id);

  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'To-do not found' });
  }

  todos.splice(index, 1);
  res.status(200).json({ message: `To-do with ID ${id} deleted successfully.` });
};

// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// DELETE /todos/:id
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;


// app.js
const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());
app.use('/', todoRoutes); // Mount the routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// controllers/todoController.js

// Existing in-memory array (for example purposes)
const todos = [
  { id: 1, task: 'Buy foodstuff' },
  { id: 2, task: 'Do backend project' },
  { id: 3, task: 'Call mother-inlaw' }
];

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'To-do not found' });
  }

  todos.splice(index, 1);
  res.status(200).json({ message: `To-do with ID ${id} deleted successfully.` });
};

//  NEW: Update controller
exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'To-do not found' });
  }

  if (!task || typeof task !== 'string') {
    return res.status(400).json({ error: 'Invalid task value' });
  }

  todo.task = task;
  res.status(200).json({ message: `To-do with ID ${id} updated successfully.`, todo });
};


// updating routes
// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// DELETE route
router.delete('/todos/:id', todoController.deleteTodo);

// NEW: PUT route for updating
router.put('/todos/:id', todoController.updateTodo);

module.exports = router;



// ensure that JSON Parsing middleware is enabled
app.use(express.json());
