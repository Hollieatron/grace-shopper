/* eslint-disable no-unused-expressions */
/* eslint-env mocha, chai */
'use strict'

const expect = require('chai').expect
const {Review} = require('./index')
const db = require('../index')

describe('Review model', () => {
  describe('Validations', () => {
    it('requires title', async () => {
      const review = Review.build()

      try {
        await review.validate()
        throw Error(
          'validation was successful but should have failed without `title`'
        )
      } catch (err) {
        expect(err.message).to.contain('title cannot be null')
      }
    })

    it('requires description', async () => {
      const review = Review.build()

      try {
        await review.validate()
        throw Error(
          'validation was successful but should have failed without `description`'
        )
      } catch (err) {
        expect(err.message).to.contain('description cannot be null')
      }
    })
  })
})