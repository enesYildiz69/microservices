const express = require('express');
const app = express();
const port = 3001;

app.get('/products', (req, res) => {
  res.json({ products: ['Product 1', 'Product 2', 'Product 3'] });
});

// Allow testing to start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Products service is running on port ${port}`);
  });
}

module.exports = app; // Export the app for testing
