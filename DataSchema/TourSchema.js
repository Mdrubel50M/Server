const mongoose =require('mongoose')

const dataSchema= new mongoose.Schema({

    title:{
        type: String,
        required: true,
        unique: true,
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      distance: {
        type: Number,
        required: true,
      }
     
      
}
)
const DataModel = mongoose.model("Tour",dataSchema)
module.exports = DataModel