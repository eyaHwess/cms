const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { description } = req.body;
    const userId = req.userId; // Get the user ID from the authenticated request

    const post = await Post.create({ description, user_id: userId });
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all posts (with comments)
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [Comment] });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single post (with comments)
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id }, include: [Comment] });
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
