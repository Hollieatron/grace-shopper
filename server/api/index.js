const router = require('express').Router()
module.exports = router

router.use('/products', require('./products'))
router.use('/categories', require('./categories'))
router.use('/users', require('./users'))
router.use('/reviews', require('./reviews'))
router.use('/cart', require('./cart'))
router.use('/charge', require('./charge'))

function isAdmin(req, res, next) {
  if (req.user && req.user.dataValues.isAdmin) {
    next()
  } else {
    const error = new Error('get outta here')
    error.status = 401
    next(error)
  }
}

function isUser(req, res, next) {
  if (req.user) {
    next()
  } else {
    const error = new Error('get outta here')
    error.status = 401
    next(error)
  }
}

router.use('/orderhistory', isUser, require('./orderhistory'))
router.use('/admin', isAdmin, require('./admin'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
