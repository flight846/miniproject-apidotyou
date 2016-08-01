const Education = require('../models/education')

function listEducation (req, res) {
  Education.find((err, educationArray) => {
    if (err) return res.status(404).json({message: 'Education not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < educationArray.length; ++i) {
      simplifiedList.push({id: educationArray[i].id, title: educationArray[i].name})
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

module.exports = {
  index: listEducation,
  show: showEducation
}
