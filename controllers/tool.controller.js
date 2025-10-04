const toolServices = require('../services/tool.service')

const getAllToolsController = async (req,res)=>{try{
    
    
    const getAllTools = await toolServices.getAll()
    res.json(getAllTools)

}catch(error){res.status(400).json(error)}}


const getToolController = async (req,res)=>{try{
    
    
    const getAllTools = await toolServices.getOne()
    res.json(getAllTools)

}catch(error){res.status(400).json(error)}}

const createToolController=async (req,res)=>{
    try{
        const body = req.body
        const ToolCreated = await toolServices.createOne(body)
        res.status(201).send(ToolCreated)
    }catch(error){res.status(400).json(error)}}




const deleteToolController=async (req,res)=>{
    try{
        const {id}= req.params
        const ToolDeleted  = await toolServices.deleteOne(id)
        res.status(204).send()
    }catch(error){res.status(400).json(error)}}


const updateToolController=async (req,res)=>{
    try{
        const {id} =req.params
        const body = req.body
        const ToolUpdated = await toolServices.updateOne(id,body)
       res.status(204).send(ToolUpdated)
    }catch(error){res.status(400).json(error)}}




module.exports = {


    getAllToolsController,
    getToolController,
    createToolController,
    deleteToolController,
    updateToolController
}


