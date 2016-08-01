var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  title: String,
  description: String,
  link: String,
  skills: []
})

module.exports = mongoose.model('Project', ProjectSchema)
