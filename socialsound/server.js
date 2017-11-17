// Server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const index = require('./server/routes/index');
const users = require('./server/routes/users');
const producers = require('./server/routes/producers');
const types = require('./server/routes/types');
const places = require('./server/routes/places');
const events = require('./server/routes/events');

app = express()

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//Routes
app
  .use('/', index)
  .use('/users', users)
  .use('/producers', producers)
  .use('/types', types)
  .use('/places', places)
  .use('/events', events);

//mongoose
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/socialsound-db')
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

//Run on port 3000
const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => console.log('Server listening in port: ' + port));
