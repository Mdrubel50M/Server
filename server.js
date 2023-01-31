const express =require('express')
const app=express();
const cors= require('cors')
const dotenv=require('dotenv')
const router=require('./Router/Router')
const connect=require('./DatabaseConnection/Connect.js')

dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/',router)


const PORT=8000;
app.listen(PORT, ()=>{
    connect();
    console.log(`Server run successfully with http://localhost:${PORT}`)
})
