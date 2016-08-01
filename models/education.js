var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EducationSchema = new Schema({
  school: String,
  subjects: String
})

module.exports = mongoose.model('Education', EducationSchema)
