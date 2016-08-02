var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AboutSchema = new Schema({
  name: String,
  picture: String,
  email: String,
  phone: Number,
  website: String,
  description: String,
  location: String,
  linkedin: String
})

module.exports = mongoose.model('About', AboutSchema)
