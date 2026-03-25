require('dotenv').config(); // Load .env variables
const express = require('express');
const connectDB = require('./src/config/db'); // Import DB connection

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Basic test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});