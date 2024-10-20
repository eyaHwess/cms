const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comment = require('./Comment');

const Post = sequelize.define('Post', {
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}
, {
  updatedAt: false, // Disable updatedAt
  timestamps: true, // Enable createdAt only
});

// Associate Post with Comments
Post.hasMany(Comment, { foreignKey: 'post_id', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = Post;
