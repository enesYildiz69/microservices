const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const productsResponse = await axios.get('http://products-service:3001/products');
    const ordersResponse = await axios.get('http://orders-service:3002/orders');

    res.json({
      products: productsResponse.data.products,
      orders: ordersResponse.data.orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Frontend service is running on port ${port}`);
});
