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
// var me = {
//   'about': [
//     {
//       'name': 'Abdul Yazid Ismail',
//       'description': 'I am a self-taught web developer and recently graduate from General Assembly Web Development Immersive Bootcamp in August 2016. I also develop in Ruby on Rails and Node & ExpressJS, I can do : HTML5/CSS3/JS/Ruby coding, Responsive layout development. I believe web development is an art, and I try to master it beautifully... created with ♡ :)'
//     },
//     {
//       'social': 'http://api-yazidismail.herokuapp.com/social',
//       'projects': 'http://api-yazidismail.herokuapp.com/projects',
//       'skills': 'http://api-yazidismail.herokuapp.com/skills',
//       'education': 'http://api-yazidismail.herokuapp.com/education',
//       'work': 'http://api-yazidismail.herokuapp.com/work'
//     }
//   ],
//
//   'social': [
//     {
//       'github': 'https://github.com/flight846',
//       'linkedin': 'https://sg.linkedin.com/in/ayazidismail',
//       'codepen': 'http://codepen.io/flight846/'
//     }
//   ],
//
//   'projects': [
//     {
//       'title': 'A personal website and blog built on Wordpress and API call for displaying items for resume',
//       'description': 'This website serves the user blogs, portfolio and resume by me.',
//       'link': 'http://www.yazidismail.com',
//       'skills': ['HTML', 'CSS', 'NodeJS', 'ExpressJS', 'JSON', 'MongoDB', 'PHP']
//     },
//     {
//       'title': 'An ExpressJS articles aggregation platform',
//       'description': 'This articles TLDR generator app lets the user to aggregates, curates and serves quality articles. Say goodbye to internet junk.',
//       'link': 'https://flight846.github.io/readr-client/',
//       'skills': ['HTML', 'SCSS', 'NodeJS', 'ExpressJS', 'JSON', 'MongoDB']
//     },
//     {
//       'title': 'API Server',
//       'description': 'A simple API server for my personal resume page built with NodeJS and ExpressJS framework',
//       'link': 'http://api-yazidismail.herokuapp.com/',
//       'skills': ['NodeJS', 'ExpressJS', 'JSON', 'MongoDB']
//     },
//     {
//       'title': 'API Client',
//       'description': 'A simple Github API client',
//       'link': 'https://flight846.github.io/miniproject-Github_API_Client/',
//       'skills': ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'JSON']
//     },
//     {
//       'title': 'A Ruby on Rails Q & A platform built on Rails Framework',
//       'description': 'This simple Q & A app allows users to view, create, edit and delete qusetions and answers. Questions have a title and body (of content) ans users can answer and vote.',
//       'link': 'http://queryme2016.herokuapp.com/',
//       'skills': ['HTML', 'SCSS', 'Ruby', 'Rails']
//     },
//     {
//       'title': 'Ruby on Rails Wiki App',
//       'description': 'A Rails CRUD wiki App',
//       'link': 'https://wdi3-wiki.herokuapp.com/',
//       'skills': ['HTML', 'SCSS', 'Ruby', 'Rails']
//     },
//     {
//       'title': 'HTML 5 2-player Quiz Game',
//       'description': 'A simple 2-player turn based HTML5 quiz game',
//       'link': 'http://flight846.github.io/wdi-project1a-html-quiz-game/',
//       'skills': ['HTML', 'CSS', 'JavaScript', 'JQuery']
//     },
//     {
//       'title': 'HTML 5 Simons Says Game',
//       'description': 'A simple HTML5 Simon Says game ',
//       'link': 'http://flight846.github.io/wdi-project1b-ONaG/',
//       'skills': ['HTML', 'CSS', 'Javascript', 'JQuery']
//     },
//     {
//       'title': 'HTML 5 Tic Tac Toe Game',
//       'description': 'A simple 2-player turn based HTML5 tic tac toe game',
//       'link': 'http://flight846.github.io/wdi-tictactoe-project/',
//       'skills': ['HTML', 'CSS', 'JavaScript', 'JQuery']
//     }
//   ],
//   'skills': [{
//     'HTML': 9,
//     'CSS': 8,
//     'Javascript': 7,
//     'JQuery': 7,
//     'Ruby': 7,
//     'Rails': 7,
//     'Node': 7.5,
//     'Express': 7.5,
//     'ReactJS': 6
//   }],
//   'education': [
//     {
//       'school': 'General Assembly',
//       'subjects': ['Web Development Immersive']
//     },
//     {
//       'school': 'Republic Polytechnic',
//       'subjects': ['Civil Aviation']
//     },
//     {
//       'school': 'ITE College West',
//       'subjects': ['Mechanical Enginneering']
//     }
//   ],
//   'work': [
//     {
//       'company': 'Freelance',
//       'role': 'Web Developer',
//       'duty': 'Develop wordpress websites, business requirements analysis, prepare Software Requirements Specifications'
//     },
//     {
//       'company': 'SMRT LTD',
//       'role': 'Crew Manager',
//       'duty': "Manage Train Drivers' leave and attendance, plan crew reformation during service distruption, manage train depot operations"
//     }
//   ]
// }
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
