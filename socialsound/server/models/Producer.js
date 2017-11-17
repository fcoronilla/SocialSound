var mongoose = require('mongoose');

var ProducerSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
  preferedType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type'
  }
});

module.exports = mongoose.model('Producer', ProducerSchema);
