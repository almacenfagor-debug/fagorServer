const toolModel = require('../models/tool.model')


class toolServices{

static async getAll() {
            try {
              const getAllTools = await toolModel.findAll();
              return getAllTools;
            } catch (error) {
              throw error;
            }
          }

static async getOne(){

    try{
    
        const getAllTools = await toolModel.findAll()
        return getAllTools
    
    }catch(error){throw error}


}



static async createOne(body){
    
        try{
            
            const ToolCreated = await toolModel.create(body)
            return ToolCreated
        }catch(error){throw error}

    
}

static async deleteOne(id){
    
        try{
          
            const ToolDeleted  = await toolModel.destroy({where:{toolId: id}})
           
            return ToolDeleted
        }catch(error){throw error}
    
}


static async updateOne(id,body){

    
        try{
           
            const ToolUpdated = await toolModel.update(body,{where:{toolId:id}})
           return ToolUpdated
        }catch(error){throw error}
    
}






}


module.exports = toolServices