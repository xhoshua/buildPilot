const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Sample route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', time: new Date() });
});

module.exports = app;