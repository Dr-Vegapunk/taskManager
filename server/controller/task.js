const { Task }= require('../model/task')


// Create a new task

exports.createTask = async (req, res) => {
  const { title, description, status, userId } = req.body;
  try {
      const task = await Task.create({ title, description, status, userId });
      res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
      console.error("Error creating task:", error); // Log the entire error object
      res.status(500).json({ error: 'Error creating task' });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching task' });
  }
};

// Update a task by ID
exports.updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.update({ title, description, status });
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

// Delete a task by ID
exports.deleteTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.destroy();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.update({ status });
    res.status(200).json({ message: 'Task status updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task status' });
  }
};

// Update task priority
exports.updateTaskPriority = async (req, res) => {
  const { id } = req.params;
  const { priority } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.update({ priority });
    res.status(200).json({ message: 'Task priority updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task priority' });
  }
};

// Update task due date
exports.updateTaskDueDate = async (req, res) => {
  const { id } = req.params;
  const { dueDate } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.update({ dueDate });
    res.status(200).json({ message: 'Task due date updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task due date' });
  }
};

// Update multiple fields
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    await task.update({ title, description, status, priority, dueDate });
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
};
