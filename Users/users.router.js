
const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)

router.get('/users/random', userServices.getRandomUser)

router.get('/users/:id', userServices.getUserById)

router.put('/users/:id', userServices.addUserById)

router.delete('/users/:id', userServices.deleteUser)

module.exports = router

