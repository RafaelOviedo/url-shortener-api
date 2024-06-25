const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./src/routes/index');

dotenv.config();

// TESTING CLUSTER
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.iecjcew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

// PRODUCTION CLUSTER

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(3001, () => {
  console.log('App running on port 3001');
});

module.exports = app;