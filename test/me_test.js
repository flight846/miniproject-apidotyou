/* globals before describe it*/

const expect = require('chai').expect
const supertest = require('supertest')
const api = supertest('http://localhost:3000') // you have to use server port 3000

// GET about me
describe('GET /', () => {
  // done is a function
  it('should return a 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.length).to.equal(response.body.length)
      done()
    })
  })
  it('should return all the records in the database', (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.be.an('array')
      done()
    })
  })
})

// GET projects/:id
describe('GET /projects/:id', () => {
  // done is a function
  it('should return a 200 response', (done) => {
    api.get('/projects/:id')
    .set('Accept', 'application/json')
    .expect(200, done)
  })

  it('should return an object containing the fields "title", "description" and "color"', (done) => {
    api.get('/projects/3')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('description')
      expect(response.body).to.have.property('link')
      done()
    })
  })
})