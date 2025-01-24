const express = require('express');
const app = express();
app.use(express.json({limit: '50mb'})); // Added limit for larger requests
app.post('/user', (req, res) => {
  try {
    console.log(req.body);
    if (!req.body || Object.keys(req.body).length === 0) { 
      res.status(400).send('Bad request: Empty request body');
    } else {
      res.send('User registered');
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Bad request: Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});