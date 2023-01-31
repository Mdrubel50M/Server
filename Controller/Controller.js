const DataModel = require('../DataSchema/TourSchema.js')



exports.insertData = async(req,res)=>{
    const reqBody= new DataModel(req.body);
    await reqBody.save((error,data)=>{
        if(error){
            res.status(404).json({status:'failed', data:'error'})
        }else{
            res.status(200).json({status:'successfully', data:data})
        }
    })
    
}