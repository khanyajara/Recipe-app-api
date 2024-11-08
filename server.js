const express = require('express');
const connectDB = require('./config/database.js');
const bodyParser = require('body-parser');
require('dotenv').config();

const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

connectDB();

app.use(bodyParser.json());


app.use('/api', recipeRoutes);


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'An unexpected error occurred',
  });
});


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
