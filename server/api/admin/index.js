const router = require('express').Router()
const {Product, Category, User, Order, OrderHistory} = require('../../db/models')
module.exports = router


//Admin Product related routes
router.post('/products', async (req, res, next) => {
  try {
    const {name, price, description, imageUrl, category, inventory} = req.body

    let categoryIds = []
    for (let i = 0; i < category.length; i++) {
      if (category[i]) categoryIds.push(i)
    }

    const product = await Product.create({
      name,
      price,
      description,
      imageUrl,
      inventory
    })
    await product.setCategories(categoryIds)

    const productWithCategories = await Product.findById(product.id, {
      include: [Category]
    })
    res.status(200).send(productWithCategories)
  } catch (err) {
    next(err)
  }
})

router.put('/product/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const {name, price, description, image, category} = req.body

    let categoryIds = []
    for (let i = 0; i < category.length; i++) {
      if (category[i]) categoryIds.push(i)
    }

    const product = await Product.findById(id)

    const updateProduct = await product.update({
      name,
      price,
      description,
      image
    })

    await updateProduct.setCategories(categoryIds)

    const productWithCategories = await Product.findById(id, {
      include: [Category]
    })

    res.status(200).send(productWithCategories)
  } catch (err) {
    next(err)
  }
})


//Admin Category Related Routes
router.post('/categories', async (req, res, next) => {
  try {
    const {name, imageUrl} = req.body
    const category = await Category.create({
      name,
      imageUrl
    })
    res.status(200).send(category)
  } catch (err) {
    next(err)
  }
})

router.put('/category/edit/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const {name, imageUrl} = req.body

    const category = await Category.findById(id)

    await category.update({
      name,
      imageUrl
    })

    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})


//User Admin Routes
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({})
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.delete('/users/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const deleted = await User.destroy({
      where: {
        id: id
      }
    })
    res.json(deleted)
  } catch (err) {
    next(err)
  }
})

router.put('/users/:id', async (req, res, next) => {
  try {
    const id = req.body.id
    const newAdminStatus = !req.body.isAdmin
    const updated = await User.update(
      {
        isAdmin: newAdminStatus
      },
      {where: {id: id}}
    )
    res.json(updated)
  } catch (error) {
    next(error)
  }
})

//Order History Admin Routes
router.get('/orderhistory/orders', async (req, res, next) => {
  try {
    const orderhistory = await Order.findAll({include: [OrderHistory]})
    res.json(orderhistory)
  } catch (err) {
    next(err)
  }
})

router.put('/orderhistory/order/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const {status} = req.body
    await Order.update({status}, {where: {id}})
    const orders = await Order.findAll()
    res.status(201).json(orders)
  } catch(err){
    next(err)
  }
})

