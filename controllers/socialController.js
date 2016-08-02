const Social = require('../models/social')

function listSocials (req, res) {
  Social.find((err, socialsArray) => {
    if (err) return res.status(404).json({message: 'Social not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < socialsArray.length; ++i) {
      simplifiedList.push({id: socialsArray[i].id, page: socialsArray[i].page, link: socialsArray[i].link})
    }
    res.status(200).json(simplifiedList)
  })
}
function showSocials (req, res) {
  Social.findById({_id: req.params.id}, (err, skill) => {
    if (err) return res.status(404).json({message: 'Social not found'})

    res.status(200).json(skill)
  })
}

function createSocial (req, res) {
  const social = new Social(req.body)
  social.save((err, social) => {
    if (err) return res.status(401).json({error: 'Social Error'})
    res.status(200).json({message: 'Social created! yay! ', social})
  })
}

function updateSocial (req, res) {
  Social.findById({_id: req.params.id}, function (err, social) {
    if (err) return res.status(401).json({error: 'Cannot update social'})
    social = req.body.social
    social.save(function (err) {
      if (err) return res.status(401).json({error: 'Social error. cant find about to social'})
      res.status(200).json({message: 'Social updated! yay! ', social})
    })
  })
}

function removeSocial (req, res) {
  Social.findById({_id: req.params.id}, function (err, social) {
    if (err) return res.status(401).json({error: 'Remove social error. cant find social to remove'})
    social.remove(function (err) {
      if (err) return res.status(401).json({error: 'Social remove error. cant remove social'})
      res.status(200).json({message: 'social removed! Yay!'})
    })
  })
}

module.exports = {
  index: listSocials,
  show: showSocials,
  create: createSocial,
  update: updateSocial,
  remove: removeSocial
}
