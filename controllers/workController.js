const Work = require('../models/work')

function listWork (req, res) {
  Work.find((err, workArray) => {
    if (err) return res.status(404).json({message: 'Work not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < workArray.length; ++i) {
      simplifiedList.push({id: workArray[i].id, duration: workArray[i].duration, company: workArray[i].company, role: workArray[i].role, duty: workArray[i].duty})
    }
    res.status(200).json(simplifiedList)
  })
}
function showWork (req, res) {
  Work.findById({_id: req.params.id}, (err, work) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    res.status(200).json(work)
  })
}

module.exports = {
  index: listWork,
  show: showWork
}
