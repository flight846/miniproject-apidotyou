const Project = require('../models/project')

function listProjects (req, res) {
  Project.find((err, projectsArray) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
    const simplifiedList = []
    for (let i = 0; i < projectsArray.length; ++i) {
      simplifiedList.push({id: projectsArray[i].id, title: projectsArray[i].title, description: projectsArray[i].description, link: projectsArray[i].link, source: projectsArray[i].source})
    }
    res.status(200).json(simplifiedList)
  })
}
function showProjects (req, res) {
  Project.findById({_id: req.params.id}, (err, project) => {
    if (err) return res.status(404).json({message: 'Project not found'})

    res.status(200).json(project)
  })
}

function createProject (req, res) {
  const project = new Project(req.body)
  project.save((err, project) => {
    if (err) return res.status(401).json({error: 'Project create Error'})
    res.status(200).json({message: 'Project created! yay! ', project})
  })
}

function updateProject (req, res) {
  Project.findById({_id: req.params.id}, function (err, project) {
    if (err) return res.status(401).json({error: 'Cannot update project'})
    project = req.body.project
    project.save(function (err) {
      if (err) return res.status(401).json({error: 'Project error. cant find project to update'})
      res.status(200).json({message: 'Project updated! yay! ', project})
    })
  })
}

function removeProject (req, res) {
  Project.findById({_id: req.params.id}, function (err, project) {
    if (err) return res.status(401).json({error: 'Remove project error. cant find project to remove'})
    project.remove(function (err) {
      if (err) return res.status(401).json({error: 'Project remove error. cant remove project'})
      res.status(200).json({message: 'Project removed! Yay!'})
    })
  })
}

module.exports = {
  index: listProjects,
  show: showProjects,
  create: createProject,
  update: updateProject,
  remove: removeProject
}
