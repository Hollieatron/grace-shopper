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
    [category1, category2, product1, product2, product3] = await seed()
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

    describe('POST /campus', () => {
      it('creates a new campus and sends back the new campus', async () => {
        await agent
          .post('/api/campus')
          .send({
            name: 'Truman State University',
            imageUrl: 'http://images.truman.edu/trumanlogo_og_image.jpg',
            address: '100 E Normal St, Kirksville, MO 63501',
            description: 'Princeton of the plains, Harvard of the Midwest'
          })
          .expect(201)
          .then(res => {
            expect(res.body).to.be.an('object')
            expect(res.body.name).to.equal('Truman State University')
            expect(res.body.address).to.equal(
              '100 E Normal St, Kirksville, MO 63501'
            )
          })
      })
    })
    
    //   it('saves updates to the DB', () => {
    //     return agent
    //       .put('/api/campus/' + harvard.id)
    //       .send({
    //         name: 'Harvard Sucks, Yale Rules!!!',
    //         imageUrl:
    //           'https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg',
    //         address: 'Cambridge, MA 02138',
    //         description: 'terrible school'
    //       })
    //       .then(() => {
    //         return Campus.findById(harvard.id)
    //       })
    //       .then(foundCampus => {
    //         expect(foundCampus).to.exist // eslint-disable-line no-unused-expressions
    //         expect(foundCampus.name).to.equal('Harvard Sucks, Yale Rules!!!')
    //         expect(foundCampus.description).to.equal('terrible school')
    //       })
    //   })

    //   it('gets 500 for invalid update', () => {
    //     return agent
    //       .put('/api/campus/' + harvard.id)
    //       .send({name: ''})
    //       .expect(500)
    //   })
    // })

    // describe('DELETE /api/campus/:campusId', async () => {
    //   it('removes a campus from the database', async () => {
    //     await agent
    //       .delete(`/api/campus/${harvard.id}`) // Oh noes! Bye, Doug!
    //       .expect(204)

    //     const isHarvardStillThere = await Campus.findById(harvard.id)
    //     expect(isHarvardStillThere).to.equal(null)
    //   })

    //   it('sends a 404 if not found', () => {
    //     return agent.delete(`/api/campus/20`).expect(404)
    //   })
    // })

    // //student routes
    // describe('/student', () => {
    //   describe('GET /student', () => {
    //     it('sends all students', () => {
    //       return agent
    //         .get('/api/student')
    //         .expect(200)
    //         .then(res => {
    //           expect(res.body).to.be.an('array')
    //           expect(
    //             res.body.some(student => student.name === student1.name)
    //           ).to.equal(true)
    //           expect(
    //             res.body.some(student => student.name === student2.name)
    //           ).to.equal(true)
    //         })
    //     })
    //   })

    //   describe('GET /student/:studentId', () => {
    //     it('gets the student with the specified id', async () => {
    //       await agent
    //         .get(`/api/student/${student1.id}`)
    //         .expect(200)
    //         .then(res => {
    //           expect(res.body).to.be.an('object')
    //           expect(res.body.firstName).to.equal(student1.firstName)
    //           expect(res.body.lastName).to.equal(student1.lastName)
    //           expect(res.body.email).to.equal(student1.email)
    //         })

    //       await agent
    //         .get(`/api/student/${student1.id}`)
    //         .expect(200)
    //         .then(res => {
    //           expect(res.body).to.be.an('object')
    //           expect(res.body.firstName).to.equal(student1.firstName)
    //         })
    //     })

    //     it('sends a 404 if not found', () => {
    //       return agent.get(`/api/student/20`).expect(404)
    //     })
    //   })

    //   describe('POST /student', () => {
    //     it('creates a new student and sends back the new student', async () => {
    //       await agent
    //         .post('/api/student')
    //         .send({
    //           firstName: 'Eliot',
    //           lastName: 'Davis',
    //           email: 'med5561@truman.edu',
    //           gpa: 3.11,
    //           campus: harvard.name
    //         })
    //         .expect(201)
    //         .then(res => {
    //           expect(res.body).to.be.an('object')
    //           expect(res.body.firstName).to.equal('Eliot')
    //           expect(res.body.email).to.equal('med5561@truman.edu')
    //           expect(res.body.campusId).to.equal(harvard.id)
    //         })
    //     })
    //   })

    //   describe('PUT /student/:id', () => {
    //     it('updates an student', () => {
    //       return agent
    //         .put('/api/student/' + student1.id)
    //         .send({
    //           firstName: 'Eliot',
    //           lastName: 'Davis',
    //           email: 'med5561@truman.edu',
    //           gpa: 3.11,
    //           campus: harvard.name
    //         })
    //         .expect(200)
    //         .expect(res => {
    //           expect(res.body.message).to.equal('Updated successfully!')
    //           expect(res.body.student.id).to.not.be.an('undefined')
    //           expect(res.body.student.firstName).to.equal('Eliot')
    //           expect(res.body.student.email).to.equal('med5561@truman.edu')
    //           expect(res.body.student.gpa).to.equal(3.11)
    //         })
    //     })

    //     it('saves updates to the DB', () => {
    //       return agent
    //         .put('/api/student/' + student1.id)
    //         .send({
    //           firstName: 'Eliot',
    //           lastName: 'Davis',
    //           email: 'med5561@truman.edu',
    //           gpa: 3.11,
    //           campus: harvard.name
    //         })
    //         .then(() => {
    //           return Student.findById(harvard.id)
    //         })
    //         .then(foundstudent => {
    //           expect(foundstudent).to.exist // eslint-disable-line no-unused-expressions
    //           expect(foundstudent.firstName).to.equal('Eliot')
    //         })
    //     })

    //     it('gets 500 for invalid update', () => {
    //       return agent
    //         .put('/api/student/' + student1.id)
    //         .send({firstName: ''})
    //         .expect(500)
    //     })
    //   })

    //   describe('DELETE /api/student/:studentId', async () => {
    //     it('removes a student from the database', async () => {
    //       await agent
    //         .delete(`/api/student/${student1.id}`) // Oh noes! Bye, Doug!
    //         .expect(204)

    //       const isHowardStillThere = await Student.findById(student1.id)
    //       expect(isHowardStillThere).to.equal(null)
    //     })

    //     it('sends a 404 if not found', () => {
    //       return agent.delete(`/api/student/20`).expect(404)
    //     })
    //   })
    // })
  })
})
