const express = require('express')
const app = express();
const port = process.env.PORT || 3000
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/html/index.html'))
})
app.get('/product_details', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/html/product_details.html'))
})
app.get('/list-product', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/html/list-product.html'))
})
app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/html/cart.html'))
})
  
app.use('/public', express.static(path.join(__dirname,'./public')))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})