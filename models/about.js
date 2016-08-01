var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AboutSchema = new Schema({
  name: String,
  description: String,
  picture: { type: String }
})

module.exports = mongoose.model('About', AboutSchema)
