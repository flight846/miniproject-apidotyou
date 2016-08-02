const Skill = require('../models/skill')

function listSkills (req, res) {
  Skill.find((err, skillsArray) => {
    if (err) return res.status(404).json({message: 'Skill not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < skillsArray.length; ++i) {
      simplifiedList.push({id: skillsArray[i].id, skill: skillsArray[i].skill, score: skillsArray[i].score})
    }
    res.status(200).json(simplifiedList)
  })
}
function showSkills (req, res) {
  Skill.findById({_id: req.params.id}, (err, skill) => {
    if (err) return res.status(404).json({message: 'Skills not found'})

    res.status(200).json(skill)
  })
}

module.exports = {
  index: listSkills,
  show: showSkills
}
