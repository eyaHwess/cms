const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');

// Protect the post creation route
router.post('/', userController.isAuthenticated, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

module.exports = router;
