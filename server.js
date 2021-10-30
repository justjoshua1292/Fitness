const express = require('express');
// const db = require('./config/connection');
const mongoose = require("mongoose");

const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/joshfitnesstracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(routes);

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });

