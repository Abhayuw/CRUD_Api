// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to database using mongoose 
mongoose.connect('mongodb://127.0.0.1:27017/crud_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('close', () => {
  console.log('MongoDB connection closed');
});
// setting up main application 
const postRouter = require('./routes/posts');
app.use('/posts', postRouter);
