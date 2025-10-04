const {Router} = require('express')
const {getStationeryController,getAllStationerysController, createStationeryController, deleteStationeryController, updateStationeryController}= require('../controllers/stationery.controller')
//const authMiddleware = require('../middlewares/auth.middleware')

const stationeryRouter = Router()

stationeryRouter.get('/api/stationery/', getAllStationerysController)

stationeryRouter.get('/api/stationery/:id', getStationeryController)

stationeryRouter.post('/api/stationery/', createStationeryController)

stationeryRouter.delete('/api/stationery/:id', deleteStationeryController)

stationeryRouter.put('/api/stationery/:id', updateStationeryController)


module.exports = stationeryRouter