const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const animalRouter = require('./router/animalRouter');

console.log(__dirname);
console.log(path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('combined'));

app.use(express.json());

app.use('/api/animal', animalRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is now running on PORT: ${PORT}`);
});
