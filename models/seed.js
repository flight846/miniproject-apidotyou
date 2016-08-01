// load in the environment vars
require('dotenv').config()

var seeder = require('mongoose-seed')

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'models/about.js',
    'models/education.js',
    'models/project.js',
    'models/skill.js',
    'models/social.js',
    'models/work.js'
  ])

  // Clear specified collections
  seeder.clearModels(['About', 'Projects', 'Education', 'Skill', 'Social', 'Work'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data)
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'About',
    'documents': [
      {
        'name': 'Abdul Yazid Ismail',
        'description': 'I am a self-taught web developer and recently graduate from General Assembly Web Development Immersive Bootcamp in August 2016. I also develop in Ruby on Rails and Node & ExpressJS, I can do : HTML5/CSS3/JS/Ruby coding, Responsive layout development. I believe web development is an art, and I try to master it beautifully... created with ♡ :)',
        'picture': 'Yazid.png'
      }
    ]
  },
  {
    'model': 'Social',
    'documents': [
      {
        'social': 'http://api-yazidismail.herokuapp.com/social',
        'projects': 'http://api-yazidismail.herokuapp.com/projects',
        'skills': 'http://api-yazidismail.herokuapp.com/skills',
        'education': 'http://api-yazidismail.herokuapp.com/education',
        'work': 'http://api-yazidismail.herokuapp.com/work'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'A personal website and blog built on Wordpress and API call for displaying items for resume',
        'description': 'This website serves the user blogs, portfolio and resume by me.',
        'link': 'http://www.yazidismail.com',
        'skills': ['HTML', 'CSS', 'NodeJS', 'ExpressJS', 'JSON', 'MongoDB', 'PHP']
      },
      {
        'title': 'An ExpressJS articles aggregation platform',
        'description': 'This articles TLDR generator app lets the user to aggregates, curates and serves quality articles. Say goodbye to internet junk.',
        'link': 'https://flight846.github.io/readr-client/',
        'skills': ['HTML', 'SCSS', 'NodeJS', 'ExpressJS', 'JSON', 'MongoDB']
      },
      {
        'title': 'API Server',
        'description': 'A simple API server for my personal resume page built with NodeJS and ExpressJS framework',
        'link': 'http://api-yazidismail.herokuapp.com/',
        'skills': ['NodeJS', 'ExpressJS', 'JSON', 'MongoDB']
      },
      {
        'title': 'API Client',
        'description': 'A simple Github API client',
        'link': 'https://flight846.github.io/miniproject-Github_API_Client/',
        'skills': ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'JSON']
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
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {
        'HTML': 9,
        'CSS': 8,
        'Javascript': 7,
        'JQuery': 7,
        'Ruby': 7,
        'Rails': 7,
        'Node': 7.5,
        'Express': 7.5,
        'ReactJS': 6
      }
    ]
  },
  {
    'model': 'Education',
    'documents': [
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
    ]
  },
  {
    'model': 'Education',
    'documents': [
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
]
