var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: String
});

module.exports = mongoose.model('Event', EventSchema);
