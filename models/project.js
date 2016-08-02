var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  title: String,
  description: String,
  link: String
})

module.exports = mongoose.model('Project', ProjectSchema)
