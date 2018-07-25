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

// describe("Student model", () => {
//   beforeEach(() => db.sync({ force: true }));

//   describe("column definitions and validations", () => {
//     it("has a `name` and `ingredients`", async () => {
//       const student = await Student.create({
//         firstName: 'Emily',
//         lastName: 'Langston',
//         email: 'student1@harvard.edu',
//         imageUrl: '',
//         gpa: 3.2
//       });

//       expect(student.firstName).to.equal("Emily");
//       expect(student.lastName).to.deep.equal("Langston");
//       expect(student.email).to.equal("student1@harvard.edu");
//       expect(student.gpa).to.equal(3.2);
//     });

//     it("`firstName` is required -null", async () => {
//         const student = Student.build({
//             lastName: 'Langston',
//             email: 'student1@harvard.edu',
//             imageUrl: '',
//             gpa: 3.2
//         });
//         return student.validate().then(
//           () => {
//             throw new Error("Validation should have failed!");
//           },
//           err => {
//             expect(err).to.be.an("error");
//           }
//         );
//       });

//       it("`firstName` is required - empty", async () => {
//         const student = Student.build({
//             firstName: '',
//             lastName: 'Langston',
//             email: 'student1@harvard.edu',
//             imageUrl: '',
//             gpa: 3.2
//         });
//         return student.validate().then(
//           () => {
//             throw new Error("Validation should have failed!");
//           },
//           err => {
//             expect(err).to.be.an("error");
//           }
//         );
//       });

//       it("`lastName` is required -null", async () => {
//         const student = Student.build({
//             firstName: 'Emily',
//             email: 'student1@harvard.edu',
//             imageUrl: '',
//             gpa: 3.2
//         });
//         return student.validate().then(
//           () => {
//             throw new Error("Validation should have failed!");
//           },
//           err => {
//             expect(err).to.be.an("error");
//           }
//         );
//       });

//       it("`lastName` is required - empty", async () => {
//         const student = Student.build({
//             firstName: 'Emily',
//             lastName: '',
//             email: 'student1@harvard.edu',
//             imageUrl: '',
//             gpa: 3.2
//         });
//         return student.validate().then(
//           () => {
//             throw new Error("Validation should have failed!");
//           },
//           err => {
//             expect(err).to.be.an("error");
//           }
//         );
//       });

//   });
// });
