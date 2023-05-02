const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.set('strictQuery', true);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/Module-18-Social-Network-API',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('strictQuery', true);
mongoose.set('debug', true);

app.listen(PORT, () => console.log(` Connected on localhost:${PORT}`));
