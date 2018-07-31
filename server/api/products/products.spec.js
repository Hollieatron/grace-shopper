const {expect} = require('chai')
const supertest = require('supertest')
const db = require('../../db')
const app = require('../../index')
const agent = supertest.agent(app)
const seed = require('../../../script/test-seed')
const {Product, Category} = require('../../db/models')

describe('Routes', () => {
  // Make sure to check out test/test-seed.js
  // This file drops the database and re-creates the dummy data
  // used by the tests.

  beforeEach(async () => {
    ;[category1, category2, product1, product2, product3] = await seed()
  })

  //product routes
  describe('/products', () => {
    describe('GET /products', () => {
      it('sends all products', () => {
        return agent
          .get('/api/products')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(
              res.body.some(product => product.name === product1.name)
            ).to.equal(true)
            expect(
              res.body.some(product => product.name === product2.name)
            ).to.equal(true)
            expect(
              res.body.some(product => product.name === product3.name)
            ).to.equal(true)
          })
      })
    })

    describe('GET /products/:id', () => {
      it('gets the product with the specified id', async () => {
        await agent
          .get(`/api/products/product/${product1.id}`)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal(product1.name)
          })

        await agent
          .get(`/api/products/product/${product2.id}`)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal(product2.name)
          })
      })

      it('sends a 404 if not found', () => {
        return agent.get(`/api/products/product/200000`).expect(404)
      })
    })

    describe('GET /products/search', () => {
      it('gets the correct product by name', async () => {
        await agent
          .get(`/api/products/search?productName=${product1.name}`)
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body[0].dataValues.name).to.equal(product1.name)
          })
      })
    })
  })
})
