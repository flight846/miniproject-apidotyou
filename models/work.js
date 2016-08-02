var mongoose = require('mongoose')
var Schema = mongoose.Schema

var WorkSchema = new Schema({
  duration: String,
  company: String,
  role: String,
  duty: String
})

module.exports = mongoose.model('Work', WorkSchema)
