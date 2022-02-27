const express = require('express');
const path = require('path')
const gameRoutes = require('./routes/game')

const app = express();

app.listen(3000, () => {
  console.log('Servers is listenting at localhost:3000');
});

app.use(express.static(
  path.join(__dirname, 'public')
))

gameRoutes(app);