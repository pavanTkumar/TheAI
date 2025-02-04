const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// A basic route to confirm the server is working
app.get('/', (req, res) => {
  res.send('Backend API is working.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
