'use strict'

const db = require('../server/db')
const {
  productData,
  userData,
  reviewData,
  sellerData,
  manufacturerData,
  categoryData,
  cartData
} = require('./seedData')

const {
  User,
  Product,
  Review,
  Category,
  Manufacturer,
  Seller,
  Cart,
  CartInventory
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
  const cartPromise = Cart.bulkCreate(cartData, {return: true})

  await Promise.all([
    productPromise,
    userPromise,
    reviewPromise,
    sellerPromise,
    manufacturerPromise,
    categoryPromise,
    cartPromise
  ])

  await db.sync()

  const products = await Product.findAll()
  const categories = await Category.findAll()
  const users = await User.findAll()
  const sellers = await Seller.findAll()
  const reviews = await Review.findAll()
  const manufacturers = await Manufacturer.findAll()
  const carts = await Cart.findAll()

  async function seedProducts() {
    for (let i = 0; i < products.length; i++) {
      const randomCategories = categories.sort(shuffle).slice(0, 2)
      const randomReviews = reviews.sort(shuffle).slice(0, 2)
      const randomSellers = sellers.sort(shuffle).slice(0, 2)
      const randomManufacturers = manufacturers.sort(shuffle).slice(0, 2)
      await products[i].setCategories(randomCategories)
      await products[i].setCategories(randomCategories)
      await products[i].setReviews(randomReviews)
      await products[i].setSeller(randomSellers[0])
      await products[i].setManufacturer(randomManufacturers[0])
    }
    return products
  }

  await seedProducts()

  async function seedCart() {
    for (let i = 0; i < carts.length; i++) {
      await carts[i].setUser(users[0])
      const randomProducts = products.sort(shuffle).slice(0, 4)
      for (let j = 0; j < randomProducts.length; j++) {
        await carts[i].setProduct(randomProducts[j])
      }
    }
  }

  await seedCart()

  //random users for reviews
  await Promise.all(
    reviews.map(review => {
      const randomUsers = users.sort(shuffle).slice(0, 4)
      return review.setUser(randomUsers[0])
    })
  )

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
