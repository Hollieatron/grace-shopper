/* eslint-disable no-unused-expressions */
/* eslint-env mocha, chai */
'use strict'

const expect = require('chai').expect
const {Cart, User} = require('./index')
const db = require('../index')
xdescribe('Cart model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has a `guest`, `product_ids` ', async () => {
      const newCart = await Cart.create({
        guest: false,
        productIds: [1, 2, 3]
      })

      expect(newCart.guest).to.deep.equal(false)
      expect(newCart.product_ids).to.equal()
    })

    it('is linked to a User', async () => {
      const newCart = await Cart.create({
        guest: false,
        productIds: [1, 2, 3]
      })
      const newUser = await User.create({
        email: 'cody@puppybook.com',
        password: 'bones'
      })

      newUser.hasCart(newCart)

      expect(newCart.userid).to.equal(newUser.id)
    })
  })
})
