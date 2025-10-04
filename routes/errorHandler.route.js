
const {logError, errorHandler,orm}= require('../middlewares/errorHandler.middleware')


const errorRouter = (app)=>{

app.use(logError)
app.use(errorHandler)
app.use(orm)

}

module.exports = errorRouter