/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Review = db.model('review')

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/reviews/', () => {
    const reviewTitle = 'I loved this product!'
    const reviewRating = 4
    const reviewDescription =
      'Aliquam et sollicitudin ex. Praesent vestibulum vulputate dui, sit amet ornare libero elementum sit amet. Ut cursus tempor urna, in volutpat diam. Phasellus sed ultrices felis. Nulla malesuada ante ac mattis placerat. Fusce sollicitudin egestas lacus, vitae pellentesque magna bibendum eget. Nulla ac auctor turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in leo ut metus iaculis posuere. Aenean et erat lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam interdum a lectus eu aliquam.'

    beforeEach(() => {
      return Review.create({
        title: reviewTitle,
        rating: reviewRating,
        description: reviewDescription
      })
    })

    it('GET /api/reviews', async () => {
      const res = await request(app)
        .get('/api/reviews')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].title).to.be.equal(reviewTitle)
      expect(res.body[0].rating).to.be.equal(reviewRating)
      expect(res.body[0].description).to.be.equal(reviewDescription)
    })
  })
})
