const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// MongoDB connection URI (replace with your actual connection string)
const MONGO_URI = 'mongodb://localhost:27017/mydatabase'; // Or use Atlas URI

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Log connection result
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB successfully!');
});

// Sample route
app.get('/', (req, res) => {
  res.send('MongoDB connection is working!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
