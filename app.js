const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Sequelize instance
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentsRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Register the routes
app.use('/api/posts', postRoutes);       // Route for posts
app.use('/api/comments', commentRoutes); // Route for comments
app.use('/api/users', userRoutes);       // Route for users

// Sync database models and start the server
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
