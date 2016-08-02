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
  seeder.clearModels(['About', 'Project', 'Education', 'Skill', 'Social', 'Work'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      console.log('Success!')
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    'model': 'About',
    'documents': [
      {
        'name': 'Abdul Yazid Ismail',
        'picture': 'http://i.imgur.com/Iwfy2HI.png',
        'email': 'flight846@gmail.com',
        'phone': +6584848964,
        'website': 'www.yazidismail.com',
        'description': 'I am a self-taught web developer and recently graduate from General Assembly Web Development Immersive Bootcamp in August 2016. I also develop in Ruby on Rails and Node & ExpressJS, I can do : HTML5/CSS3/JS/Ruby coding, Responsive layout development. I believe web development is an art, and I try to master it beautifully... created with ♡ :)',
        'location': 'Bukit Panjang, Singapore',
        'linkedin': 'https://sg.linkedin.com/in/ayazidismail'
      }
    ]
  },
  {
    'model': 'Social',
    'documents': [
      {
        'page': 'Github',
        'link': 'https://github.com/flight846'
      },
      {
        'page': 'linkedin',
        'link': 'https://sg.linkedin.com/in/ayazidismail'
      },
      {
        'page': 'codepen',
        'link': 'http://codepen.io/flight846/'
      }
    ]
  },
  {
    'model': 'Project',
    'documents': [
      {
        'title': 'A personal website and blog built on Wordpress and API call for displaying items for resume',
        'description': 'This website serves the user blogs, portfolio and resume by me.',
        'link': 'http://www.yazidismail.com'
      },
      {
        'title': 'An ExpressJS articles aggregation platform',
        'description': 'This articles TLDR generator app lets the user to aggregates, curates and serves quality articles. Say goodbye to internet junk.',
        'link': 'https://flight846.github.io/readr-client/'
      },
      {
        'title': 'API Server',
        'description': 'A simple API server for my personal resume page built with NodeJS and ExpressJS framework',
        'link': 'http://api-yazidismail.herokuapp.com/'
      },
      {
        'title': 'API Client',
        'description': 'A simple Github API client',
        'link': 'https://flight846.github.io/miniproject-Github_API_Client/'
      },
      {
        'title': 'A Ruby on Rails Q & A platform built on Rails Framework',
        'description': 'This simple Q & A app allows users to view, create, edit and delete qusetions and answers. Questions have a title and body (of content) ans users can answer and vote.',
        'link': 'http://queryme2016.herokuapp.com/'
      },
      {
        'title': 'Ruby on Rails Wiki App',
        'description': 'A Rails CRUD wiki App',
        'link': 'https://wdi3-wiki.herokuapp.com/'
      },
      {
        'title': 'HTML 5 2-player Quiz Game',
        'description': 'A simple 2-player turn based HTML5 quiz game',
        'link': 'http://flight846.github.io/wdi-project1a-html-quiz-game/'
      },
      {
        'title': 'HTML 5 Simons Says Game',
        'description': 'A simple HTML5 Simon Says game ',
        'link': 'http://flight846.github.io/wdi-project1b-ONaG/'
      },
      {
        'title': 'HTML 5 Tic Tac Toe Game',
        'description': 'A simple 2-player turn based HTML5 tic tac toe game',
        'link': 'http://flight846.github.io/wdi-tictactoe-project/'
      }
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {
        'skill': 'HTML',
        'score': 9
      },
      {
        'skill': 'CSS',
        'score': 8
      },
      {
        'skill': 'JavaScript',
        'score': 7
      },
      {
        'skill': 'JQuery',
        'score': 7
      },
      {
        'skill': 'SqLite3',
        'score': 8
      },
      {
        'skill': 'Postgresql',
        'score': 8
      },
      {
        'skill': 'Ruby',
        'score': 7
      },
      {
        'skill': 'Rails',
        'score': 7
      },
      {
        'skill': 'NodeJS',
        'score': 7.5
      },
      {
        'skill': 'Express',
        'score': 8
      },
      {
        'skill': 'ReactJS',
        'score': 5
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
    'model': 'Work',
    'documents': [
      {
        'duration': '2015-present',
        'company': 'Freelance',
        'role': 'Web Developer',
        'duty': 'Develop wordpress websites, business requirements analysis, prepare Software Requirements Specifications'
      },
      {
        'duration': '2013-2015',
        'company': 'SMRT LTD',
        'role': 'Crew Manager',
        'duty': "Manage Train Drivers' leave and attendance, plan crew reformation during service distruption, manage train depot operations"
      }
    ]
  }
]
