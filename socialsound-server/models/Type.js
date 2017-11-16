var mongoose = require('mongoose');

var TypeSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String
});

module.exports = mongoose.model('Type', TypeSchema);
