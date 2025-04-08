const express =require('express');
const router = express.Router();
const{ createTask, getAllTasks, getTaskById, updateTaskById, updateTaskStatus, deleteTaskById } = require('../controller/task');
 

// Route to create a new task
router.post('/', createTask);

// Route to get all tasks
router.get('/', getAllTasks);

// Route to get a task by ID
router.get('/:id', getTaskById);

// Route to update a task by ID
router.put('/:id', updateTaskById);

// Route to update task status only
router.patch('/:id/status', updateTaskStatus);

// Route to delete a task by ID
router.delete('/:id', deleteTaskById);


module.exports=router;

