/* eslint-disable no-unused-expressions */
/* eslint-env mocha, chai */
'use strict'

const expect = require('chai').expect
const {Product} = require('./index')
const db = require('../index')
describe('Product model', () => {
  beforeEach(() => db.sync({force: true}))

  describe('column definitions and validations', () => {
    it('has a `name`, `price`, `description` and `inventory` ', async () => {
      const newRobot = await Product.create({
        name: 'Robo',
        price: 400,
        inventory: 17,
        description: 'definitely a long description'
      })

      expect(newRobot.name).to.equal('Robo')
      expect(newRobot.inventory).to.deep.equal(17)
      expect(newRobot.description).to.equal('definitely a long description')
      expect(newRobot.price).to.deep.equal(400)
    })

    it('`name` is required', async () => {
      try {
        const newRobot = await Product.create({
          price: 400,
          inventory: 17,
          description: 'definitely a long description'
        })
      } catch (err) {
        expect(err.name).to.eql('SequelizeValidationError')
      }
    })

    it('`price` is required', async () => {
      try {
        const newRobot = await Product.create({
          name: 'Robo',
          inventory: 17,
          description: 'definitely a long description'
        })
      } catch (err) {
        expect(err.name).to.eql('SequelizeValidationError')
      }
    })

    it('`description` is required', async () => {
      try {
        const newRobot = await Product.create({
          name: 'Robo',
          price: 400,
          inventory: 17
        })
      } catch (err) {
        expect(err.name).to.eql('SequelizeValidationError')
      }
    })

    it('`inventory` is required', async () => {
      try {
        const newRobot = await Product.create({
          name: 'Robo',
          price: 400,
          description: 'definitely a long description'
        })
      } catch (err) {
        expect(err.name).to.eql('SequelizeValidationError')
      }
    })
  })
})
