var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SocialSchema = new Schema({
  page: String,
  link: String
})

module.exports = mongoose.model('Social', SocialSchema)
