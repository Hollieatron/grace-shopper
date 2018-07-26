/* eslint-disable no-unused-expressions */
/* eslint-env mocha, chai */
'use strict'

const expect = require('chai').expect
const {Cart} = require('./index')
const db = require('../index')
describe('Cart model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has a `name`, `price`, `description` and `inventory` ', async () => {
      const newCart = await Cart.create({
        userid: 1,
        guest: false,
        product_ids: [1,2,3]    
    })

      expect(newCart.userid).to.equal(1)
      expect(newCart.guest).to.deep.equal(false)
      expect(newCart.product_ids).to.equal()
    })
  })
})
