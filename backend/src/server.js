const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

mongoose.connect('mongodb+srv://calculandoApp:OsEHxoDsVtzrFjjS@calculando.2q4ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);