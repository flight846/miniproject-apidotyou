var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SocialSchema = new Schema({
  page: String
})

module.exports = mongoose.model('Social', SocialSchema)
