const ppeModel = require('../models/ppe.model')


class ppeServices{


      static async getAll() {
        try {
          const getAllPpes = await ppeModel.findAll();
          return getAllPpes;
        } catch (error) {
          throw error;
        }
      }

static async getOne(){

    try{
    
        const getAllppes = await employeeModel.findByPk(id //, {
       /*include: { model: supplyDeliveryModel, attributes: ["user_id"] },
      }*/)
        return getAllppes
    
    }catch(error){throw error}


}



static async createOne(body){
    
        try{
            
            const ppeCreated = await ppeModel.create(body)
            return ppeCreated
        }catch(error){throw error}

    
}

static async deleteOne(id){

    
        try{
          
            const ppeDeleted  = await ppeModel.destroy({where:{ppeId:id}})
            return ppeDeleted
        }catch(error){throw error}
    
}


static async updateOne(id,body){

    
        try{
           
            const ppeUpdated = await ppeModel.update(body,{where:{ppeId:id}})
           return ppeUpdated
        }catch(error){throw error}
    
}





}


module.exports = ppeServices