const mongoose=require('mongoose')
mongoose.set('strictQuery', false);
async function connect(){
    const db =mongoose.connect(process.env.MONGO_URI)
    console.log('successfully connected with Database');
    return db;
}

module.exports=connect;