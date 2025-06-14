const express = require('express');
const app = express();
const PORT = 3000;

// === Middleware to log request details ===
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// === Example route ===
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// === Route that triggers an error ===
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  next(err); // Forward error to error-handling middleware
});

// === Error-handling middleware ===
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({
    status: 'error',
    message: 'Oops! Something broke. Please try again later.',
  });
});

// === Start the server ===
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
