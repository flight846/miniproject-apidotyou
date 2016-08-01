var express = require('express')
var router = express.Router()

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
var me = {
  'about': [
    {
      'name': 'Abdul Yazid Ismail',
      'description': 'I am a self-taught web developer and recently graduate from General Assembly Web Development Immersive Bootcamp in August 2016. I also develop in Ruby on Rails and Node & ExpressJS, I can do : HTML5/CSS3/JS/Ruby coding, Responsive layout development. I believe web development is an art, and I try to master it beautifully... created with ♡ :)'
    },
    {
      'Social': 'http://api-yazidismail.herokuapp.com/social',
      'Projects': 'http://api-yazidismail.herokuapp.com/projects',
      'Skills': 'http://api-yazidismail.herokuapp.com/skills',
      'Education': 'http://api-yazidismail.herokuapp.com/education',
      'Work': 'http://api-yazidismail.herokuapp.com/work'
    }
  ],

  'social': [
    {
      'github': 'https://github.com/flight846',
      'linkedin': 'https://sg.linkedin.com/in/ayazidismail',
      'codepen': 'http://codepen.io/flight846/'
    }
  ],

  'projects': [
    {
      'title': 'An ExpressJS articles aggregation platform',
      'description': 'This articles TLDR generator app lets the user to aggregates, curates and serves quality articles. Say goodbye to internet junk.',
      'link': 'https://flight846.github.io/readr-client/',
      'skills': ['HTML', 'SCSS', 'NodeJS', 'ExpressJS', 'JSON', 'MongoDB']
    },
    {
      'title': 'A Ruby on Rails Q & A platform built on Rails Framework',
      'description': 'This simple Q & A app allows users to view, create, edit and delete qusetions and answers. Questions have a title and body (of content) ans users can answer and vote.',
      'link': 'http://queryme2016.herokuapp.com/',
      'skills': ['HTML', 'SCSS', 'Ruby', 'Rails']
    },
    {
      'title': 'Ruby on Rails Wiki App',
      'description': 'A Rails CRUD wiki App',
      'link': 'https://wdi3-wiki.herokuapp.com/',
      'skills': ['HTML', 'SCSS', 'Ruby', 'Rails']
    },
    {
      'title': 'API Client',
      'description': 'A simple Github API client',
      'link': 'https://flight846.github.io/miniproject-Github_API_Client/',
      'skills': ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'JSON']
    },
    {
      'title': 'HTML 5 2-player Quiz Game',
      'description': 'A simple 2-player turn based HTML5 quiz game',
      'link': 'http://flight846.github.io/wdi-project1a-html-quiz-game/',
      'skills': ['HTML', 'CSS', 'JavaScript', 'JQuery']
    },
    {
      'title': 'HTML 5 Simons Says Game',
      'description': 'A simple HTML5 Simon Says game ',
      'link': 'http://flight846.github.io/wdi-project1b-ONaG/',
      'skills': ['HTML', 'CSS', 'Javascript', 'JQuery']
    },
    {
      'title': 'HTML 5 Tic Tac Toe Game',
      'description': 'A simple 2-player turn based HTML5 tic tac toe game',
      'link': 'http://flight846.github.io/wdi-tictactoe-project/',
      'skills': ['HTML', 'CSS', 'JavaScript', 'JQuery']
    }
  ],
  'skills': [{
    'HTML': 9,
    'CSS': 8,
    'Javascript': 7,
    'Ruby': 7,
    'Node': 7.5,
    'Express': 7.5,
    'ReactJS': 6.0
  }],
  'education': [
    {
      'school': 'General Assembly',
      'subjects': ['Web Development Immersive']
    },
    {
      'school': 'Republic Polytechnic',
      'subjects': ['Civil Aviation']
    },
    {
      'school': 'ITE College West',
      'subjects': ['Mechanical Enginneering']
    }
  ],
  'work': [
    {
      'company': 'Freelance',
      'role': 'Web Developer',
      'duty': 'Develop wordpress websites, business requirements analysis, prepare Software Requirements Specifications'
    },
    {
      'company': 'SMRT LTD',
      'role': 'Crew Manager',
      'duty': "Manage Train Drivers' leave and attendance, plan crew reformation during service distruption, manage train depot operations"
    }
  ]
}
/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json(me.about)
})

/* GET social media links page. */
router.get('/social', function (req, res, next) {
  res.status(200).json(me.social)
})

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.status(200).json(me.projects)
})

/* GET projects/:id page. */
router.get('/projects/:id', function (req, res, next) {
  res.status(200).json(me.projects[parseInt(req.params.id)])
})

/* GET skills page. */
router.get('/skills', function (req, res, next) {
  res.status(200).json(me.skills)
})

/* GET education page. */
router.get('/education', function (req, res, next) {
  res.status(200).json(me.education)
})

/* GET education/:id page. */
router.get('/education/:id', function (req, res, next) {
  res.status(200).json(me.education[parseInt(req.params.id)])
})

/* GET work page. */
router.get('/work', function (req, res, next) {
  res.status(200).json(me.work)
})

module.exports = router
