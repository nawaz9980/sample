// Step 1: Install Express if you haven't
// npm install express

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Route: /get
app.get('/get', (req, res) => {
  res.send('Hello World from /get!');
});

// Route: /new
app.get('/new', (req, res) => {
  res.send('Hello World from /new!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

