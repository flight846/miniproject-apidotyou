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
        'link': 'http://resume.yazodismail.com',
        'source': 'http://i.imgur.com/wqb1NCU.png'
      },
      {
        'title': 'An ExpressJS articles aggregation platform',
        'description': 'This articles TLDR generator app lets the user to aggregates, curates and serves quality articles. Say goodbye to internet junk.',
        'link': 'https://flight846.github.io/readr-client/',
        'source': 'http://i.imgur.com/3yfus7g.png'
      },
      {
        'title': 'API Client',
        'description': 'A simple Github API client',
        'link': 'https://flight846.github.io/miniproject-Github_API_Client/',
        'source': 'http://i.imgur.com/ujwGEFo.png'
      },
      {
        'title': 'A Ruby on Rails Q & A platform built on Rails Framework',
        'description': 'This simple Q & A app allows users to view, create, edit and delete qusetions and answers. Questions have a title and body (of content) ans users can answer and vote.',
        'link': 'http://queryme2016.herokuapp.com/',
        'source': 'http://i.imgur.com/mkM5fcF.png'
      },
      {
        'title': 'Ruby on Rails Wiki App',
        'description': 'A Rails CRUD wiki App',
        'link': 'https://wdi3-wiki.herokuapp.com/',
        'source': 'http://i.imgur.com/AuwrDnJ.png'
      },
      {
        'title': 'HTML 5 Simons Says Game',
        'description': 'A simple HTML5 Simon Says game ',
        'link': 'http://flight846.github.io/wdi-project1b-ONaG/',
        'source': 'http://i.imgur.com/SVOanvr.png'
      }
    ]
  },
  {
    'model': 'Skill',
    'documents': [
      {
        'skill': 'HTML',
        'width': '90%'
      },
      {
        'skill': 'CSS',
        'width': '80%'
      },
      {
        'skill': 'JavaScript',
        'width': '70%'
      },
      {
        'skill': 'JQuery',
        'width': '70%'
      },
      {
        'skill': 'SqLite3',
        'width': '80%'
      },
      {
        'skill': 'Postgresql',
        'width': '80%'
      },
      {
        'skill': 'Ruby',
        'width': '70%'
      },
      {
        'skill': 'Rails',
        'width': '70%'
      },
      {
        'skill': 'NodeJS',
        'width': '75%'
      },
      {
        'skill': 'Express',
        'width': '80%'
      },
      {
        'skill': 'ReactJS',
        'width': '50%'
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
