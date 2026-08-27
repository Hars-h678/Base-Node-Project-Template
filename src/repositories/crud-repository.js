const {Logger} = require('../config');

class CrudRepository{
    constructor(model){
        this.model=model
    }

    async create(data){
        
            const response=await this.model.create(data);
            return response;

    }

    async destroy(data){
            const response=await this.model.destroy({where:{id:data}});
            return response;
        
    }

    async get(data){
            const response=await this.model.findByPk(data);
            return response;
      
    }

    async getAll(){
       
            const response=await this.model.findAll();
            return response;// u can put whre clause here also 
       
    }

    async update(id,data){// data will be an object which will row and column
       
            const response=await this.model.update(data,{where:{id:id}});
            return response;
        
    }
}
module.exports ={
    CrudRepository
}