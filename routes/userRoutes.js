const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
// Login route
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);

module.exports = router;
