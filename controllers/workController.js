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

function createWork (req, res) {
  const work = new Work(req.body)
  work.save((err, work) => {
    if (err) return res.status(401).json({error: 'Work Error'})
    res.status(200).json({message: 'Work created! yay! ', work})
  })
}

function updateWork (req, res) {
  Work.findById({_id: req.params.id}, function (err, work) {
    if (err) return res.status(401).json({error: 'Cannot update work'})
    work = req.body.work
    work.save(function (err) {
      if (err) return res.status(401).json({error: 'Work error. cant find work to update'})
      res.status(200).json({message: 'Work updated! yay! ', work})
    })
  })
}

module.exports = {
  index: listWork,
  show: showWork,
  create: createWork,
  update: updateWork
}
