var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userName: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

//Para crear el primer document de User - testing
// User.create({ userName: 'admin', password: 'admin1' }, function (err, doc) {
// });

module.exports = User;