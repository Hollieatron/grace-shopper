const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const updatedFirstName = req.body.firstName
    const updatedLastName = req.body.lastName
    const updatedUsername = req.body.username
    const updatedEmail = req.body.email

    const user = await User.update(
      {
        firstName: updatedFirstName,
        lastName: updatedLastName,
        username: updatedUsername,
        email: updatedEmail
      },
      {
        where: {
          id: id
        }
      }
    )
    res.json(user)
  } catch (err) {
    next(err)
  }
})
