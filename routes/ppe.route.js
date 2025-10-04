const {Router} = require('express')
const {getPpeController,getAllPpesController, createPpeController, deletePpeController, updatePpeController}= require('../controllers/ppe.controller')
//const authMiddleware = require('../middlewares/auth.middleware')

const ppeRouter = Router()

ppeRouter.get('/api/ppe/', getAllPpesController)

ppeRouter.get('/api/ppe/:id', getPpeController)

ppeRouter.post('/api/ppe/', createPpeController)

ppeRouter.delete('/api/ppe/:id', deletePpeController)

ppeRouter.put('/api/ppe/:id', updatePpeController)


module.exports = ppeRouter