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
  res.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, OPTIONS')
  next()
})

// Profile Routes inline
router.get('/', (req, res) => {
  // we only have a single profile in the db, so the first one is fine
  About.findOne({}, (err, about) => {
    if (err) return res.status(404).json({message: 'About not found'})
    res.json(about)
  })
})

// Keep project routes in a seperate controller file
router.get('/socials', socialController.index)
router.get('/socials/:id', socialController.show)

// Keep project routes in a seperate controller file
router.get('/skills', skillsController.index)
router.get('/skills/:id', skillsController.show)

// Keep project routes in a seperate controller file
router.get('/projects', projectsController.index)
router.get('/projects/:id', projectsController.show)

// Keep project routes in a seperate controller file
router.get('/education', educationController.index)
router.get('/education/:id', educationController.show)

// Keep project routes in a seperate controller file
router.get('/work', workController.index)
router.get('/work/:id', workController.show)

module.exports = router
