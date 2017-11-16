var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String
});

module.exports = mongoose.model('Place', PlaceSchema);
