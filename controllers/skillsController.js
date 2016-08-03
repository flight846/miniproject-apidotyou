const Skill = require('../models/skill')

function listSkills (req, res) {
  Skill.find((err, skillsArray) => {
    if (err) return res.status(404).json({message: 'Skill not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < skillsArray.length; ++i) {
      simplifiedList.push({id: skillsArray[i].id, skill: skillsArray[i].skill, width: skillsArray[i].width})
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

function createSkill (req, res) {
  const skill = new Skill(req.body)
  skill.save((err, skill) => {
    if (err) return res.status(401).json({error: 'Skill update Error'})
    res.status(200).json({message: 'Skill created! yay! ', skill})
  })
}

function updateSkill (req, res) {
  Skill.findById({_id: req.params.id}, function (err, skill) {
    if (err) return res.status(401).json({error: 'Cannot update skill'})
    skill = req.body.skill
    skill.save(function (err) {
      if (err) return res.status(401).json({error: 'Skill error. cant find about to skill'})
      res.status(200).json({message: 'Skill updated! yay! ', skill})
    })
  })
}

function removeSkill (req, res) {
  Skill.findById({_id: req.params.id}, function (err, skill) {
    if (err) return res.status(401).json({error: 'Remove skill error. cant find skill to remove'})
    skill.remove(function (err) {
      if (err) return res.status(401).json({error: 'Skill remove error. cant remove skill'})
      res.status(200).json({message: 'skill removed! Yay!'})
    })
  })
}

module.exports = {
  index: listSkills,
  show: showSkills,
  create: createSkill,
  update: updateSkill,
  remove: removeSkill
}
