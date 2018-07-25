const router = require('express').Router()
module.exports = router

function isAdmin(req, res, next) {
  if (req.user.dataValues.isAdmin && req.user) {
    next()
  } else {
    res.send('man who are you? get outta here!')
  }
}

router.use('/users', require('./users'))
router.use('/admin', isAdmin, require('./admin'))
router.use('/products', require('./products'))
router.use('/categories', require('./categories'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
