const express = require('express');
const app = express();
const port = 3002;

app.get('/orders', (req, res) => {
  res.json({ orders: ['Order 1', 'Order 2', 'Order 3'] });
});

// Allow testing to start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Orders service is running on port ${port}`);
  });
}

module.exports = app; // Export the app for testing
