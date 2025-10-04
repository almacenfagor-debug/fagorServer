const {Router} = require('express')
const {getToolController,getAllToolsController, createToolController, deleteToolController, updateToolController}= require('../controllers/tool.controller')
//const authMiddleware = require('../middlewares/auth.middleware')

const toolRouter = Router()

toolRouter.get('/api/tool/', getAllToolsController)

toolRouter.get('/api/tool/:id', getToolController)

toolRouter.post('/api/tool/', createToolController)

toolRouter.delete('/api/tool/:id', deleteToolController)

toolRouter.put('/api/tool/:id', updateToolController)


module.exports = toolRouter