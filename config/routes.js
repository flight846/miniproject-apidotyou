var express = require('express')
var router = express.Router()
var About = require('../models/about')
var projectsController = require('../controllers/projectsController')
var socialController = require('../controllers/socialController')
var skillsController = require('../controllers/skillsController')
var educationController = require('../controllers/educationController')
var workController = require('../controllers/workController')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
  next()
})

// Keep project routes in a seperate controller file
// Profile Routes inline
router.get('/', (req, res) => {
  // we only have a single profile in the db, so the first one is fine
  About.findOne({}, (err, profile) => {
    if (err) return res.status(404).json({message: 'About not found'})
    res.json(profile)
  })
})

// Keep project routes in a seperate controller file
router.get('/socials', socialController.index)
router.get('/socials/:id', socialController.show)
router.post('/social', socialController.create)
router.put('/social/:id', socialController.update)
router.delete('/social/:id', socialController.remove)

// Keep project routes in a seperate controller file
router.get('/skills', skillsController.index)
router.get('/skills/:id', skillsController.show)
router.post('/skill', skillsController.create)
router.put('/skill/:id', skillsController.update)
router.delete('/skill/:id', skillsController.remove)

// Keep project routes in a seperate controller file
router.get('/projects', projectsController.index)
router.get('/projects/:id', projectsController.show)
router.post('/project', projectsController.create)
router.put('/project/:id', projectsController.update)
router.delete('/projects/:id', projectsController.remove)

// Keep project routes in a seperate controller file
router.get('/education', educationController.index)
router.get('/education/:id', educationController.show)
router.post('/education', educationController.create)
router.put('/education/:id', educationController.update)

// Keep project routes in a seperate controller file
router.get('/work', workController.index)
router.get('/work/:id', workController.show)
router.post('/work', workController.create)
router.put('/work/:id', workController.update)

module.exports = router
