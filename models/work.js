var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkSchema = new Schema({
  company: String,
  role: String,
  duty: String
})

module.exports = mongoose.model('Work', WorkSchema)
