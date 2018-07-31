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

  describe('PUT /product/edit/:id', () => {
    it('updates a product', () => {
      return agent
        .put('/api/admin/product/edit/' + product1.id)
        .send({
          name: 'Henry',
          price: 39,
          description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
          imageUrl: 'https://robohash.org/fgykjfth',
          inventory: 1
        })
        .expect(200)
        .expect(res => {
          expect(res.body.product.id).to.not.be.an('undefined')
          expect(res.body.product.name).to.equal('Henry')
          expect(res.body.campus.price).to.equal(39)
          expect(res.body.campus.inventory).to.equal(1)
        })
    })
  })
})
