const stationeryServices = require('../services/stationery.service')

const getAllStationerysController = async (req,res)=>{try{
    
    
    const getAllStationerys = await stationeryServices.getAll()
    res.json(getAllStationerys)

}catch(error){res.status(400).json(error)}}


const getStationeryController = async (req,res)=>{try{
    
    
    const getAllStationerys = await stationeryServices.getOne()
    res.json(getAllStationerys)

}catch(error){res.status(400).json(error)}}

const createStationeryController=async (req,res)=>{
    try{
        const body = req.body
        const StationeryCreated = await stationeryServices.createOne(body)
        res.status(201).send(StationeryCreated)
    }catch(error){res.status(400).json(error)}}




const deleteStationeryController=async (req,res)=>{
    try{
        const {id}= req.params
        const StationeryDeleted  = await stationeryServices.deleteOne(id)
        res.status(204).send()
    }catch(error){res.status(400).json(error)}}


const updateStationeryController=async (req,res)=>{
    try{
        const {id} =req.params
        const body = req.body
        const StationeryUpdated = await stationeryServices.updateOne(body,id)
       res.status(204).send()
    }catch(error){res.status(400).json(error)}}




module.exports = {


    getAllStationerysController,
    getStationeryController,
    createStationeryController,
    deleteStationeryController,
    updateStationeryController
}


