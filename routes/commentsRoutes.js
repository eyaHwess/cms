const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');
const userController = require('../controllers/userController');

// Protect the comment creation route
router.post('/', userController.isAuthenticated, commentController.createComment);
router.get('/post/:post_id', commentController.getCommentsByPostId);

module.exports = router;
