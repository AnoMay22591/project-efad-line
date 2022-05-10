var express = require('express');
var product = require('./api/product')
var app = express();
const port = process.env.PORT || 3000;


app.use("/api/product",product);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});