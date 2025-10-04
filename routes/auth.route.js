const {Router} = require('express')
const {loginController,requestController,authorizeController, rejectController} = require('../controllers/auth.controller')

const authRouter = Router()


authRouter.post('/api/auth/login/', loginController)
authRouter.post('/api/auth/request/', requestController)
authRouter.get('/api/auth/authorize/:employeeId', authorizeController)
authRouter.get('/api/auth/reject/:employeeId', rejectController)

module.exports = authRouter
























