const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../controller/user');

// Register a new user
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Update user by ID
router.put('/:id', updateUserById);

// Delete user by ID
router.delete('/:id', deleteUserById);



module.exports = router;
