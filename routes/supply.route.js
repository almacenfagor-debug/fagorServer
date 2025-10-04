const {Router} = require('express')
const {getSupplyController,getAllSupplysController, createSupplyController, deleteSupplyController, updateSupplyController}= require('../controllers/supply.controller')
//const authMiddleware = require('../middlewares/auth.middleware')

const supplyRouter = Router()

supplyRouter.get('/api/supply/', getAllSupplysController)

supplyRouter.get('/api/supply/:id', getSupplyController)

supplyRouter.post('/api/supply/', createSupplyController)

supplyRouter.delete('/api/supply/:id', deleteSupplyController)

supplyRouter.put('/api/supply/:id', updateSupplyController)


module.exports = supplyRouter