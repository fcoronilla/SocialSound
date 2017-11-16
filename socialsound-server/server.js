// Server.js
var express = require('express')
var mongoose = require('mongoose')

const index = require('./routes/index')
const users = require('./routes/users')
const producers = require('./routes/producers')
const types = require('./routes/types')
const places = require('./routes/places')
const events = require('./routes/events')

app = express()

//Routes
app
  .use('/', index)
  .use('/users', users)
  .use('/producers', producers)
  .use('/types', types)
  .use('/places', places)
  .use('/events', events)

//mongoose
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/socialsound-db')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

//Run on port 3000
port = process.env.PORT || 3000;
app.listen(port);

console.log('Server listening in port: ' + port);
