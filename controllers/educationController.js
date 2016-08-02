const Education = require('../models/education')

function listEducation (req, res) {
  Education.find((err, educationArray) => {
    if (err) return res.status(404).json({message: 'Education not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < educationArray.length; ++i) {
      console.log(educationArray)
      simplifiedList.push({id: educationArray[i].id, school: educationArray[i].school, subjects: educationArray[i].subjects})
    }
    res.status(200).json(simplifiedList)
  })
}

function showEducation (req, res) {
  Education.findById({_id: req.params.id}, (err, education) => {
    if (err) return res.status(404).json({message: 'Education not found'})

    res.status(200).json(education)
  })
}
function createEducation (req, res) {
  const education = new Education(req.body)
  education.save((err, education) => {
    if (err) return res.status(401).json({error: 'Education save Error'})
    res.status(200).json({message: 'Education created! yay! ', education})
  })
}

function updateEducation (req, res) {
  Education.findById({_id: req.params.id}, function (err, education) {
    if (err) return res.status(401).json({error: 'Cannot update education'})
    education = req.body.education
    education.save(function (err) {
      if (err) return res.status(401).json({error: 'Education save error. cant find education to update'})
      res.status(200).json({message: 'Education updated! yay! ', education})
    })
  })
}

module.exports = {
  index: listEducation,
  show: showEducation,
  create: createEducation,
  update: updateEducation
}
