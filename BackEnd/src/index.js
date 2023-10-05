require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'))
// HTTP Logger
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})