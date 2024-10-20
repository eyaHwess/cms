const Comment = require('../models/Comment');

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { description, user_id, post_id } = req.body;
    const comment = await Comment.create({ description, user_id, post_id });
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all comments for a specific post
exports.getCommentsByPostId = async (req, res) => {
  try {
    const { post_id } = req.params;
    const comments = await Comment.findAll({ where: { post_id } });
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
