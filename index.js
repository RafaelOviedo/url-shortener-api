const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./src/routes/index');

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(3001, () => {
  console.log('App running on port 3001');
})

module.exports = app;