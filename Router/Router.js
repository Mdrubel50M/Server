const express =require('express')
const  Controller=require('../Controller/Controller.js')
const router=express.Router();


router.post('/insertData',Controller.insertData);


module.exports=router