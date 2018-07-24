'use strict'

const db = require('../server/db')
const {
  productData,
  userData,
  reviewData,
  sellerData,
  manufacturerData,
  categoryData
} = require('./seedData')

const {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller
} = require('../server/db/models/index')

/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const shuffle = () => 0.5 - Math.random()

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  const productPromise = Product.bulkCreate(productData, {returning: true})
  const userPromise = User.bulkCreate(userData, {returning: true})
  const reviewPromise = Review.bulkCreate(reviewData, {returning: true})
  const sellerPromise = Seller.bulkCreate(sellerData, {returning: true})
  const manufacturerPromise = Manufacturer.bulkCreate(manufacturerData, {
    returning: true
  })
  const categoryPromise = Category.bulkCreate(categoryData, {returning: true})

  await Promise.all([
    productPromise,
    userPromise,
    reviewPromise,
    sellerPromise,
    manufacturerPromise,
    categoryPromise
  ])

  await db.sync()

  const products = await Product.findAll()
  const categories = await Category.findAll()
  const users = await User.findAll()
  const sellers = await Seller.findAll()
  const reviews = await Review.findAll()
  const manufacturers = await Manufacturer.findAll()

  //random categories for products
  await Promise.all(
    products.map(product => {
      const randomCategories = categories.sort(shuffle).slice(0, 10)

      return product.setCategories(randomCategories)
    })
  )

  //random reviews for products
  await Promise.all(
    products.map(product => {
      const randomReviews = reviews.sort(shuffle).slice(0, 2)
      return product.setReviews(randomReviews)
    })
  )

  //random sellers for products
  await Promise.all(
    products.map(product => {
      const randomSellers = sellers.sort(shuffle).slice(0, 2)
      return product.setSeller(randomSellers[0])
    })
  )

  //random manufacturer for products
  await Promise.all(
    products.map(product => {
      const randomManufacturers = manufacturers.sort(shuffle).slice(0, 2)

      return product.setManufacturer(randomManufacturers[0])
    })
  )

  //random products for categories
  await Promise.all(
    categories.map(category => {
      const randomProducts = products.sort(shuffle).slice(0, 99)
      return category.setProducts(randomProducts)
    })
  )

  //random users for reviews
  await Promise.all(
    reviews.map(review => {
      const randomUsers = users.sort(shuffle).slice(0, 4)

      return review.setUser(randomUsers[0])
    })
  )

  //random products for manufacturers
  // await Promise.all(
  //   manufacturers.map(manufacturer => {
  //     const randomProducts = products.sort(shuffle).slice(0, 9)

  //     return manufacturer.setProducts(randomProducts)
  //   })
  // )
  //random products for sellers
  // await Promise.all(
  //   sellers.map(seller => {
  //     const randomProducts = products.sort(shuffle).slice(0, 2)

  //     return seller.setProducts(randomProducts)
  //   })
  // )

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  //console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
