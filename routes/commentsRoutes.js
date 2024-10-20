const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentsController');

router.post('/', commentController.createComment);
router.get('/post/:post_id', commentController.getCommentsByPostId);

module.exports = router;
