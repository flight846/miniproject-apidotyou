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

module.exports = {
  index: listSocials,
  show: showSocials
}
