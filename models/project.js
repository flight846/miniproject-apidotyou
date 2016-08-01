var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  title: String,
  description: String,
  link: String,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skills' }]
})

module.exports = mongoose.model('Project', ProjectSchema)
