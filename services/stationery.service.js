const stationeryModel = require('../models/stationery.model')


class stationeryServices{


    
          static async getAll() {
            try {
              const getAllPpes = await stationeryModel.findAll();
              return getAllPpes;
            } catch (error) {
              throw error;
            }
          }

static async getOne(){

    try{
    
        const getAllstationerys = await stationeryModel.findAll()
        return getAllstationerys
    
    }catch(error){throw error}


}



static async createOne(body){
    
        try{
            
            const stationeryCreated = await stationeryModel.create(body)
            return stationeryCreated
        }catch(error){throw error}

    
}

static async deleteOne(id){

    
        try{
          
            const stationeryDeleted  = await stationeryModel.destroy({where:{stationeryId:id}})
            return stationeryDeleted
        }catch(error){throw error}
    
}


static async updateOne(body, id){

    
        try{
           
            const stationeryUpdated = await stationeryModel.update(body,{where:{stationeryId:id}})
           return stationeryUpdated
        }catch(error){throw error}
    
}





}


module.exports = stationeryServices