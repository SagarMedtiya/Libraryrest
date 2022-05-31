const router = require('express').Router();
const bookController = require('./controllers/bookController')


router.post('/api/create',bookController.create)
router.put('/api/update:id',bookController.update)
router.delete('/api/update:id',bookController.delete)

module.exports = router